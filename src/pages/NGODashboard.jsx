// src/pages/NGODashboard.jsx
import ListingCard from "@/components/ListingCard";

export default function NGODashboard() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">NGO Dashboard</h2>

      <div>
        <h3 className="text-xl font-medium mb-2">Available Food Listings</h3>
        {/* Example listings; in future, pull from backend */}
        <ListingCard
          name="Veg Pulao"
          quantity="15 boxes"
          expiry="Today, 8 PM"
          status="Available"
        />
        <ListingCard
          name="Chapati + Dal"
          quantity="20 servings"
          expiry="Tomorrow, 12 PM"
          status="Available"
        />
      </div>
    </div>
  );
}
