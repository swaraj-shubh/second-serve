// src/components/AddFoodForm.jsx
import { useState } from "react";

export default function AddFoodForm() {
  const [foodName, setFoodName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expiry, setExpiry] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/food/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          foodName,
          quantity,
          expiry,
        }),
      });

      if (res.ok) {
        alert("Food item added successfully!");
        setFoodName("");
        setQuantity("");
        setExpiry("");
      } else {
        alert("Failed to add food item.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred while adding food.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-md max-w-xl">
      <h3 className="text-lg font-semibold">Add New Food Listing</h3>

      <div>
        <label className="block text-sm font-medium">Food Name</label>
        <input
          className="w-full border rounded-md p-2"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Quantity</label>
        <input
          className="w-full border rounded-md p-2"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Expiry Time</label>
        <input
          type="datetime-local"
          className="w-full border rounded-md p-2"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-green-700"
      >
        Add Food
      </button>
    </form>
  );
}
