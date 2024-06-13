const jsonwebtoken = require('jsonwebtoken');
const optgenerator = require('otp-generator');


const User = require('../models/user');
const OTP = require('../models/otp');


const signToken = id => {
  return jsonwebtoken.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

}

exports.login = async (req, res, next) => {

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      status: 'fail',
      message: 'Please provide email and password',
    });
  }

  const user = await User.findOne({ email: email }).select('+password');

  if (!user || !(await user.correctPassword(password, user.password))) {
    return res.status(401).json({
      status: 'fail',
      message: 'Incorrect email or password',
    });
  }

  const token = signToken(user._id);

  res.status(200).json({
    status: 'success',
    message: 'Login successful',
    token,
  });

};

exports.signup = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  const filteredBody = filterObj(req.body, 'firstName', 'lastName', 'email', 'password');

  const existingUser = await User.findOne({ email: email });

  if (existingUser && existingUser.verified) {
    return res.status(400).json({
      status: 'fail',
      message: 'This email is already in use. Please login instead.',
    });
  } else if (existingUser && !existingUser.verified) {
    const updated_user = await User.findByIdAndUpdate(existingUser._id, filteredBody, { new: true, validateModifiedOnly: true });

    req.userId = updated_user._id;
    return next(); // Generate token and otp
  } else {
    const newUser = await User.create(filteredBody);

    req.userId = newUser._id;
    return next(); // Generate token and otp
  }
};


exports.generateOtp = async (req, res, next) => {
  const { userId } = req;

  const otp = optgenerator.generate(6, { upperCase: false, specialChars: false });

  const otpDoc = await OTP.create({ userID: userId, otp });

  // TODO: SEND OTP AS EMAIL TO THE USER

  res.status(200).json({
    status: 'success',
    message: 'OTP generated successfully',
  });
  
}

exports.verifyOtp = async (req, res, next) => {
  const { userId, otp } = req.body;

  const userOTP = await OTP.findOne({ userID: userId });

  if (userOTP && !await userOTP.correctOTP(otp, userOTP.otp)) {
    return res.status(400).json({
      status: 'fail',
      message: 'Invalid OTP or OTP expired. Please try again.',
    });
  }

  await User.findByIdAndUpdate(userId, { verified: true });

  const token = signToken(userId);

  res.status(200).json({
    status: 'success',
    message: 'OTP verified successfully',
    token,
  });
};

exports.forgotPassword = async (req, res, next) => {
  const { email } = req.body;
  // TODO: SEND PASSWORD RESET LINK TO THE USER
};

exports.resetPassword = async (req, res, next) => {
  const { userId, password } = req.body;
  // TODO: RESET PASSWORD
};