const mongoose = require('mongoose');

const baseModal = require("./base");

const friendRequestSchema = new mongoose.Schema({
  ...baseModal,
  sender: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  receiver: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending',
  }
});


const FriendRequest = mongoose.model('FriendRequest', friendRequestSchema);

module.exports = FriendRequest;