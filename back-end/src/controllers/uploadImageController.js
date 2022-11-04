const uploadImageService = require('../services/uploadImageService');

const upload = async (req, res) => {
  const { id } = req.params;
  console.log('request ---->', req.files);
  const { image } = req.files;
  // await uploadImageService(id, urlImage);
  console.log('-- url img --->', urlImage)
  return res.status(200).end();
}

module.exports = { upload };
