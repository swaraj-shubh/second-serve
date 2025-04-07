// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "@/pages/Home";
import AuthPage from "@/pages/AuthPage";
import RestaurantDashboard from "@/pages/RestaurantDashboard";
import NGODashboard from "@/pages/NGODashboard";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/restaurant-dashboard" element={<RestaurantDashboard />} />
        <Route path="/ngo-dashboard" element={<NGODashboard />} />
        <Route path="/dashboard" element={<Navigate to="/auth" />} /> {/* temporary redirect */}
        <Route path="*" element={<div className="text-center mt-20 text-xl">404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
