import dotenv from "dotenv"
dotenv.config();


import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

// Configuration
cloudinary.config({
  cloud_name: 'du14pthnq',
  api_key: '358852982296192',
  api_secret: process.env.CLOUDNARY_KEY // Click 'View API Keys' above to copy your API secret
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'final test',

  },
});
// export default cloudinary

export { storage }