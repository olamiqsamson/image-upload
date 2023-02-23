const cloudinary = require("cloudinary").v2;
const fs = require('fs')

const uploadImage = async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(
            req.files.image.tempFilePath,
            {
              use_filename: true,
              folder: "productImages",
            }
          );
           console.log(result);
          fs.unlinkSync(req.files.image.tempFilePath);
          return res.status(200).json({ image: { src: result.secure_url } });
    } catch (error) {
        console.log(error);
        res.send('error')
    }
  // console.log(req.files.image);
 
};

module.exports = uploadImage;
