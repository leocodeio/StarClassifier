import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, null: false },
  password: { type: String, required: true, null: false, select: false, },
  createdAt: { type: Date, default: Date.now },
});

export const User = mongoose.model("User", userSchema);
