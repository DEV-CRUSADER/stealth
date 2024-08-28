const FriendRequest = require("../models/friendRequest");
const User = require("../models/user");
const catchAsync = require("../utils/catchAsync");
const filterObj = require("../utils/filterUserObject");

exports.getMe = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: req.user,
  });
});

exports.updateMe = catchAsync(async (req, res, next) => {
  const filteredBody = filterObj(
    req.body,
    "firstName",
    "lastName",
    "about",
    "avatar"
  );

  const userDoc = await User.findByIdAndUpdate(req.user._id, filteredBody);

  res.status(200).json({
    status: "success",
    data: userDoc,
    message: "User Updated successfully",
  });
});

exports.getUsers = catchAsync(async (req, res, next) => {
  const users = await User.find({
    verified: true,
  }).select("_id firstName lastName username anonymousName");

  const this_user = req.user;

  const remainingUsers = users.filter(
    (user) =>
      !this_user.friends.includes(user._id) &&
      user._id.toString() !== this_user._id.toString()
  );

  res.status(200).json({
    status: "success",
    data: remainingUsers,
  });
});

exports.getRequests = catchAsync(async (req, res, next) => {
  const requests = await FriendRequest.find({
    receiver: req.user._id,
    status: "pending",
  }).populate("sender");

  res.status(200).json({
    status: "success",
    data: requests,
    message: "Requests fetched successfully",
  });
});

exports.getFriends = catchAsync(async (req, res, next) => {
  const this_user = await User.findById(req.user._id).populate(
    "friends",
    "_id firstName lastName username anonymousName"
  );

  res.status(200).json({
    status: "success",
    data: this_user.friends,
    message: "Friends fetched successfully",
  });
});
