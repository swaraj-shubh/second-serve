// src/pages/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-emerald-300 p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Welcome to Second Serve</h1>
      <p className="text-lg text-center mb-8 max-w-xl">
        A platform connecting restaurants and NGOs to share excess food and make a difference together.
      </p>
      <Link to="/auth">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </Link>
    </div>
  );
}
