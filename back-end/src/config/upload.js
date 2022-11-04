const crypto = require('crypto');
const multer = require('multer');
const { resolve } = require('path');

module.exports = {
  upload(folder) {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', folder),
        filename: (request, file, callback) => {
          const fileHah = crypto.randomBytes(16).toString('hex');
          const filename = `${fileHah}-${file.originalname}`;
          return callback(null, filename);
        },
      }),
    };
  },
};