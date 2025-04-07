// src/components/ListingCard.jsx
export default function ListingCard({ name, quantity, expiry, status }) {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 mb-4 max-w-xl">
        <h4 className="text-lg font-semibold">{name}</h4>
        <p className="text-sm text-gray-600">Quantity: {quantity}</p>
        <p className="text-sm text-gray-600">Expiry: {expiry}</p>
        <p
          className={`mt-2 inline-block px-3 py-1 rounded-full text-sm ${
            status === "Available"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status}
        </p>
      </div>
    );
  }
  