import express from "express"
import { image } from "../Controller/Image.controller.js"
import multer from "multer"
import {storage} from "../config/Cloudinary.js"

const upload=multer({storage:storage})

const ImageRoute=express.Router()
ImageRoute.post('/upload', upload.single("image"), image)
export default ImageRoute;