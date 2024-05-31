const million = require('million/compiler');
const MillionLint = require('@million/lint').default;
module.exports = {
  webpack: {
    plugins: {
      add: [
        million.webpack({ auto: true }),
        MillionLint.webpack({ legacyHmr: true }),
      ]
    }
  }
};