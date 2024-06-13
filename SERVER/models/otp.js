const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 10 * 60 * 1000, // 10 minutes expiry
  },
});

otpSchema.pre('save', async function (next) {

  if (!this.isModified('otp')) return next();

  this.otp = await bcrypt.hash(this.otp, 12);

  next();
});

otpSchema.methods.correctOTP = async function (candidateOTP, userOTP) {
  return await bcrypt.compare(candidateOTP, userOTP);
}

exports.otp = mongoose.model('OTP', otpSchema);