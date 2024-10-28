import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const isAuthenticated = async (req, res, next) => {
  try {
      const { token } = req.cookies;
      console.log(token);

    if (!token) {
      return res.status(404).json({
        success: false,
        message: 'Login first',
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(404).json({
        success: false,
        message: 'Invalid Token',
      });
    }

    req.user = await User.findOne({ _id: decoded._id });

    next();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
