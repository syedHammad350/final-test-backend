import Admin from "../Models/admin.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



export const Adminlogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // console.log("Request Email:", email);  // Debugging
    // console.log( email);  // Debugging
    // const hash= await bcrypt.hash("Hammad78222",10)
    // console.log(hash);  // Debugging
    
    const user = await Admin.findOne({ email: email.trim() });

    // console.log("Found User:", user); // Should not be null

    if (!user) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // If bcrypt check karna ho
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });
     const token=jwt.sign({email:user.email,id:user._id},process.env.JWT_KEY,{
                expiresIn:"1h"
            })


    res.status(200).json({
      message: "Login successful",
      admin: {
        _id: user._id,
        name: user.name,
        email: user.email,
        profileImage: user.profileImage,
        token:token
      },
    });

  } catch (error) {
    console.error("Login Error:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
