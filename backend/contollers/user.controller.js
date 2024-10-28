import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import { saveCookie } from "../utils/features.js";

export const createUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, password: hashedPassword });

    saveCookie(user, res, next, 201, "User created successfully");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password!" });
    }
    saveCookie(user, res, next, 200, "User logged in successfully");
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const userProfile = async (req, res, next) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};

export const logoutUser = (req, res, next) => {
  try {
    res
      .status(200)
      .cookie("token", "", {
        expires: new Date(Date.now()),
        sameSite: process.env.NODE_ENV === "development" ? "lax" : "none",
        secure: process.env.NODE_ENV === "development" ? false : true,
      })
      .json({
        success: true,
        message: "Logged Out Successfully",
      });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
