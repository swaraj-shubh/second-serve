import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { auth } from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("restaurant");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard"); // adjust based on role
    } catch (err) {
      alert("Login failed");
      console.error(err);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uid: userCred.user.uid,
          email,
          role,
        }),
      });
      navigate("/dashboard"); // redirect based on role
    } catch (err) {
      alert("Signup failed");
      console.error(err);
    }
  };

  return (
    <div className="bg-blue-900 max-w-md mx-auto mt-12 p-6 shadow-lg rounded-xl bg-emerald-400">
      <Tabs defaultValue="login" className="w-full max-w-md mx-auto bg-yellow-300 p-6 rounded-xl shadow-md">
          <TabsList className="grid w-full grid-cols-2 bg-gray-100 rounded-lg overflow-hidden mb-4">
            <TabsTrigger
              value="login"
              className="py-2 text-sm font-medium data-[state=active]:bg-orange-300 data-[state=active]:text-black data-[state=inactive]:text-gray-600 hover:bg-primary/90 transition"
            >
              Login
            </TabsTrigger>
            <TabsTrigger
              value="signup"
              className="py-2 text-sm font-medium data-[state=active]:bg-orange-300 data-[state=active]:text-black data-[state=inactive]:text-gray-600 hover:bg-primary/90 transition"
            >
              Signup
            </TabsTrigger>
          </TabsList>

        {/* Login Tab */}
        <TabsContent value="login">
          <form
            onSubmit={handleLogin}
            className="space-y-6 mt-6 bg-white p-6 rounded-lg shadow-sm border border-gray-200"
          >
            <div>
              <Label htmlFor="login-email" className="text-sm text-gray-700">
                Email
              </Label>
              <Input
                id="login-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <Label htmlFor="login-password" className="text-sm text-gray-700">
                Password
              </Label>
              <Input
                id="login-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1"
                placeholder="••••••••"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-400 text-black hover:bg-primary/90 transition rounded-md"
            >
              Login
            </Button>
          </form>
        </TabsContent>


        {/* Signup Tab */}
        <TabsContent value="signup">
          <form
            onSubmit={handleSignup}
            className="space-y-6 mt-6 bg-white p-6 rounded-lg shadow-sm border border-gray-200"
          >
            <div>
              <Label htmlFor="signup-email" className="text-sm text-gray-700">
                Email
              </Label>
              <Input
                id="signup-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <Label htmlFor="signup-password" className="text-sm text-gray-700">
                Password
              </Label>
              <Input
                id="signup-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1"
                placeholder="••••••••"
              />
            </div>

            <div>
              <Label htmlFor="signup-role" className="text-sm text-gray-700">
                Select Role
              </Label>
              <select
                id="signup-role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="restaurant">Restaurant</option>
                <option value="ngo">NGO/Needy</option>
              </select>
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-400 text-black hover:bg-primary/90 transition rounded-md"
            >
              Sign Up
            </Button>
          </form>
        </TabsContent>

      </Tabs>
    </div>
  );
}
