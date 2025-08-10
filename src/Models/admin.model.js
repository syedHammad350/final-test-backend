import mongoose, { model, Schema } from "mongoose";

const adminSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  profileImage: {
    type: String,
    default: "https://res.cloudinary.com/du14pthnq/image/upload/v1753965005/WhatsApp_Image_2025-07-31_at_5.10.51_AM_zkpoib.jpg"
  }
});


const Admin = model("Admin", adminSchema, "Admins");

export default Admin;
