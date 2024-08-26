const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");
const crypto = require("crypto");

const filterObj = require("../utils/filterUserObject");

const User = require("../models/user");
const { promisify } = require("util");
const catchAsync = require("../utils/catchAsync");

const signToken = (userId) => jwt.sign({ userId }, process.env.JWT_SECRET);

const sendEmail = require("../mailer");

const SITE_URL = process.env.SITE_URL;


exports.register = catchAsync(async (req, res, next) => {
  const { firstName, lastName, username, email, password } = req.body;

  const filteredBody = filterObj(
    req.body,
    "firstName",
    "lastName",
    "username",
    "email",
    "password"
  );

  const existing_username = await User.findOne({ username: username });

  if (existing_username) {
    return res.status(400).json({
      status: "error",
      message: "Username already in use, Please choose another.",
    });
  }

  const existing_user = await User.findOne({ email: email });

  if (existing_user && existing_user.verified) {
    return res.status(400).json({
      status: "error",
      message: "Email already in use, Please login.",
    });
  } else if (existing_user) {

    await User.findOneAndUpdate({ email: email }, filteredBody, {
      new: true,
      validateModifiedOnly: true,
    });

    req.userId = existing_user._id;
    next();
  } else {
    const new_user = await User.create(filteredBody);

    req.userId = new_user._id;
    next();
  }
});

exports.sendOTP = catchAsync(async (req, res, next) => {
  const userId = req.userId ?? req.body.userId;

  const new_otp = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  });
  // console.log(new_otp);

  const otp_expiry_time = Date.now() + 10 * 60 * 1000; // 10 Mins after otp is sent

  const user = await User.findByIdAndUpdate(userId, {
    otp_expiry_time: otp_expiry_time,
  });

  user.otp = new_otp.toString();

  await user.save({ new: true, validateModifiedOnly: true });

  sendEmail(
    'account_verification', 
    {
      otp: new_otp,
    }, 
    user.email,
    "SphereX Account Verification OTP"
  );

  res.status(200).json({
    status: "success",
    message: "OTP Sent Successfully!",
  });
});

exports.verifyOTP = catchAsync(async (req, res, next) => {
  const { email, otp } = req.body;
  const user = await User.findOne({
    email,
    otp_expiry_time: { $gt: Date.now() },
  });

  if (!user) {
    return res.status(400).json({
      status: "error",
      message: "Email is invalid or OTP expired",
    });
  }

  if (user.verified) {
    return res.status(400).json({
      status: "error",
      message: "Email is already verified",
    });
  }

  if (!(await user.correctOTP(otp, user.otp))) {
    res.status(400).json({
      status: "error",
      message: "OTP is incorrect",
    });

    return;
  }

  user.verified = true;
  user.otp = undefined;
  await user.save({ new: true, validateModifiedOnly: true });

  const token = signToken(user._id);

  res.status(200).json({
    status: "success",
    message: "OTP verified Successfully!",
    token,
    user_id: user._id,
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { user , password } = req.body;

  if (!user || !password) {
    res.status(400).json({
      status: "error",
      message: "Both email and password are required",
    });
    return;
  }

  const searchedUser = await User.findOne({
    $or: [{ email: user }, { username: user }]
  }).select("+password");
  
  // const searchedUser = await User.findOne({ email: user }).select("+password");

  if (!searchedUser || !searchedUser.password) {
    res.status(400).json({
      status: "error",
      message: "Email/Username or password is incorrect",
    });

    return;
  }

  if (!searchedUser || !(await searchedUser.correctPassword(password, searchedUser.password))) {
    res.status(400).json({
      status: "error",
      message: "Email?Username or password is incorrect",
    });

    return;
  }

  const token = signToken(searchedUser._id);

  res.status(200).json({
    status: "success",
    message: "Logged in successfully!",
    token,
    user_id: searchedUser._id,
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return res.status(401).json({
      message: "You are not logged in! Please log in to get access.",
    });
  }
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  console.log(decoded);


  const this_user = await User.findById(decoded.userId);
  if (!this_user) {
    return res.status(401).json({
      message: "The user belonging to this token does no longer exists.",
    });
  }
  if (this_user.changedPasswordAfter(decoded.iat)) {
    return res.status(401).json({
      message: "User recently changed password! Please log in again.",
    });
  }
  req.user = this_user;
  next();
});

exports.forgotPassword = catchAsync(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "There is no user with email address.",
    });
  }

  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  // 3) TODO: Send it to user's email
  try {
    const resetURL = `${SITE_URL}/auth/new-password?token=${resetToken}`;

    sendEmail(
      'password_reset', 
      {
        userName: user.firstName + " " + user.lastName,
        resetPasswordLink: resetURL
      }, 
      user.email,
      "SphereX Account Password Reset"
    );

    res.status(200).json({
      status: "success",
      message: "Token sent to email!",
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return res.status(500).json({
      message: "There was an error sending the email. Try again later!",
    });
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  // 1) Get user based on the token
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  if (!req.body.password || !req.body.passwordConfirm) {
    return res.status(400).json({
      status: "error",
      message: "Please provide password and confirm password ",
    });
  }

  if (req.body.password !== req.body.passwordConfirm) {
    return res.status(400).json({
      status: "error",
      message: "Passwords do not match",
    });
  }

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  if (!user) {
    return res.status(400).json({
      status: "error",
      message: "Token is Invalid or Expired",
    });
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  const signInToken = signToken(user._id);

  res.status(200).json({
    status: "success",
    message: "Password Reseted Successfully",
    signInToken,
  });
});
