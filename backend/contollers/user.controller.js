import User from "../models/user.model.js";

export const createUser = async (req, res) => {
  // console.log(req.body);
  const { email, password } = req.body;
  // console.log(email, password);
  try {
    const existingUser = await User.findOne({ email, password });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = await User.create({ email, password });
    // console.log(user);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
