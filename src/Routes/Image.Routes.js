import express from "express"
import { image } from "../Controller/Image.controller.js"
import multer from "multer"
import {storage} from "../config/Cloudinary.js"

const upload=multer({storage:storage})

const imageRoute=express.Router()
imageRoute.post('/upload', upload.single("image"), image)
export default imageRoute;