const mongoose = require('mongoose');

const baseModal = require("./base");

const oneToOneMessageSchema = new mongoose.Schema({
  ...baseModal,
  sender: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  receiver: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  isRead: {
    type: Boolean,
    default: false,
  },
  isDelivered: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    enum: ['text', 'image', 'audio', 'video', 'file'],
    default: 'text',
  },
  message: {
    type: String,
  },
  file: {
    type: String,
  },
});


const OneToOneMessage = mongoose.model('FriendRequest', oneToOneMessageSchema);

module.exports = OneToOneMessage;