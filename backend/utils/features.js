import jwt from "jsonwebtoken";
export const saveCookie = (user, res, next, statusCode, message) => {
    try {
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

        res
      .status(statusCode)
      .cookie('token', token, {
        httpOnly: true,
        maxAge: 31 * 24 * 60 * 60 * 1000,
        sameSite: process.env.NODE_ENV === 'development' ? 'lax' : 'none',
        secure: process.env.NODE_ENV === 'development' ? false : true,
      })
      .json({
        success: true,
        message: message,
      });
    }
    catch(error) {
        res.status(404).json({ message: error.message });
    }
}