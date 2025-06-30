"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    router.push("/login");
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Left side - Logo */}
      <div
        className="cursor-pointer font-bold text-xl"
        onClick={() => router.push("/")}
      >
        Logo
      </div>

      {/* Middle - Regenerate if logged in */}
      <div>
        {isAuthenticated && (
          <button
            className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => router.push("/generate")}
          >
            Regenerate
          </button>
        )}
      </div>

      {/* Right side */}
      <div className="flex space-x-4">
        {!isAuthenticated ? (
          <>
            <button
              onClick={() => router.push("/login")}
              className="hover:underline"
            >
              Login
            </button>
            <button
              onClick={() => router.push("/register")}
              className="hover:underline"
            >
              Register
            </button>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
