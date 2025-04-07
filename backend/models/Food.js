import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  foodName: String,
  quantity: String,
  expiry: String,
  addedBy: String,
});

export default mongoose.model("Food", foodSchema);
