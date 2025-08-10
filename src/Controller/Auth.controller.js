import user from "../Models/user.model.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const create_user = async (req, res) => {
  try {
    const { email, name, password, profileImage } = req.body;
    if (!email || !name || !password) {
      return res.status(400).json({ message: "Please fill in all fields." });
    }

    const exist_user = await user.findOne({ email });
    if (exist_user) {
      return res.status(400).json({ message: "Email already exists." });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const new_user = new user({
      email,
      name,
      password: hashedPassword,
      profileImage,
    });

    await new_user.save();
    res.status(201).json({ message: "User created successfully.",new_user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const signin_user = async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log("Password from body:", password);

    if (!email || !password) {
      return res.status(400).json({ message: "Please fill in all fields." });
    }

    const user_exist = await user.findOne({ email });
    if (!user_exist) {
      return res.status(400).json({ message: "User not found." });
    }

    const isMatch = bcrypt.compareSync(password, user_exist.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password." });
    }

    const token = jwt.sign(
      { email: user_exist.email, id: user_exist._id },
      process.env.JWT_KEY,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "User logged in successfully.",
      token,
      user: {
        _id: user_exist._id,
        name: user_exist.name,
        email: user_exist.email,
        profileImage: user_exist.profileImage,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
