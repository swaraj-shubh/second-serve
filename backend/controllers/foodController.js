import Food from "../models/Food.js";

export const addFood = async (req, res) => {
  const { foodName, quantity, expiry, addedBy } = req.body;
  try {
    const newFood = new Food({ foodName, quantity, expiry, addedBy });
    await newFood.save();
    res.status(201).json({ message: "Food added" });
  } catch (error) {
    res.status(500).json({ error: "Failed to add food" });
  }
};

export const getAllFood = async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch food" });
  }
};
