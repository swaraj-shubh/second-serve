import User from "../models/User.js";

export const registerUser = async (req, res) => {
  const { uid, email, role } = req.body;
  try {
    const newUser = new User({ uid, email, role });
    await newUser.save();
    res.status(201).json({ message: "User registered" });
  } catch (error) {
    res.status(500).json({ error: "Failed to register user" });
  }
};
