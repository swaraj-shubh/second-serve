// src/pages/RestaurantDashboard.jsx
import AddFoodForm from "@/components/AddFoodForm";
import ListingCard from "@/components/ListingCard";

export default function RestaurantDashboard() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Restaurant Dashboard</h2>
      
      <AddFoodForm />

      <div className="mt-8">
        <h3 className="text-xl font-medium mb-2">Your Listings</h3>
        {/* Example listing; in future, map over actual food data */}
        <ListingCard
          name="Excess Biryani"
          quantity="10 boxes"
          expiry="Today, 9 PM"
          status="Available"
        />
      </div>
    </div>
  );
}
