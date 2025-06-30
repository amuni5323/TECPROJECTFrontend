"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthForm({ isLogin }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isLogin ? "/auth/login" : "/auth/register";

    try {
      const res = await fetch(`http://localhost:5001/api${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          isLogin
            ? { email, password }
            : { name, email, password, role: "user" }
        ),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      if (isLogin) {
        alert("Login successful");
        localStorage.setItem("token", data.token); // Save token
        router.push("/generate");
      } else {
        alert("Registration successful. Check your email to verify.");
        router.push("/login"); // Navigate to login after registration
      }
    } catch (error) {
      console.error("❌ Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">
        {isLogin ? "Login" : "Register"}
      </h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div>
            <label className="block mb-2">Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 mb-4 border rounded"
              placeholder="Your Name"
            />
          </div>
        )}
        <div>
          <label className="block mb-2">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block mb-2">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-6 border rounded"
            placeholder="********"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700"
        >
          {isLogin ? "Login" : "Register"}
        </button>
      </form>

      <p className="mt-4 text-center">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          className="text-indigo-600 hover:underline"
          onClick={() => router.push(isLogin ? "/register" : "/login")}
        >
          {isLogin ? "Register" : "Login"}
        </button>
      </p>
    </div>
  );
}


// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import GeneratePage from "@/app/generate/page";
// export default function AuthForm({ isLogin }) {
//   const router = useRouter();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const endpoint = isLogin ? "/auth/login" : "/auth/register";

//     try {
//       const res = await fetch(`http://localhost:5001/api${endpoint}`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(
//           isLogin
//             ? { email, password }
//             : { name, email, password, role: "user" }
//         ),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         alert(data.message);
//         return;
//       }

//       if (isLogin) {
//         alert("Login successful");
//         router.push("/");
//       } else {
//         alert("Registration successful. Check your email to verify.");
//         router.push("/email-sent");
//       }
//     } catch (error) {
//       alert("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-6 text-center">
//         {isLogin ? "Login" : "Register"}
//       </h2>
//       <form onSubmit={handleSubmit}>
//         {!isLogin && (
//           <div>
//             <label className="block mb-2">Name</label>
//             <input
//               type="text"
//               required
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full p-2 mb-4 border rounded"
//               placeholder="Your Name"
//             />
//           </div>
//         )}
//         <div>
//           <label className="block mb-2">Email</label>
//           <input
//             type="email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-2 mb-4 border rounded"
//             placeholder="you@example.com"
//           />
//         </div>
//         <div>
//           <label className="block mb-2">Password</label>
//           <input
//             type="password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-2 mb-6 border rounded"
//             placeholder="********"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700"
//         >
//           {isLogin ? "Login" : "Register"}
//         </button>
//       </form>

//       <p className="mt-4 text-center">
//         {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
//         <button
//           className="text-indigo-600 hover:underline"
//           onClick={() => router.push(isLogin ? "/register" : "/login")}
//         >
//           {isLogin ? "Register" : "Login"}
//         </button>
//       </p>
//     </div>
//   );
// }




// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function Home() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const router = useRouter();

//   // Check if user is logged in
//   useEffect(() => {
//     const token = localStorage.getItem("token"); // assuming token is stored
//     setIsLoggedIn(!!token);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token"); // clear token
//     setIsLoggedIn(false); // update state
//     router.push("/login"); // redirect to login
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-purple-100 via-pink-50 to-white text-gray-800">
//       {/* Navbar */}
//       <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
//         {/* Logo and link */}
//         <div className="flex items-center space-x-6">
//           <div className="text-2xl font-extrabold text-purple-600">
//             IdeaBloom 🌸
//           </div>
//           {isLoggedIn && (
//             <Link
//               href="/generate"
//               className="text-purple-600 font-medium hover:text-purple-800"
//             >
//               Generate Content
//             </Link>
//           )}
//         </div>

//         {/* Auth buttons */}
//        {/* Links */}
// <div className="space-x-4">
//   {isLoggedIn ? (
//     <>
//       <a
//         href="/generate"
//         className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
//       >
//         Generate Content
//       </a>
//       <button
//         onClick={handleLogout}
//         className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
//       >
//         Logout
//       </button>
//     </>
//   ) : (
//     <>
//       <a
//         href="/login"
//         className="text-purple-600 font-medium hover:text-purple-800"
//       >
//         Login
//       </a>
//       <a
//         href="/register"
//         className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700"
//       >
//         Register
//       </a>
//     </>
//   )}
// </div>

//       </nav>

//       {/* Main content */}
//       <main className="flex flex-col items-center justify-center py-24 px-4 text-center">
//         <h1 className="text-5xl font-bold text-purple-700 mb-6">
//           Welcome to IdeaBloom 🌸
//         </h1>
//         <p className="text-lg text-gray-700 max-w-xl">
//           You are logged in if you see this page. Start bringing your ideas to life with our collaborative platform.
//         </p>
//       </main>
//     </div>
//   );
// }
// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function AuthForm({ type }) {
//   const router = useRouter();
//   const isLogin = type === "login";

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const endpoint = isLogin ? "/api/login" : "/api/register";

//     try {
//       const res = await fetch(endpoint, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (res.ok) {
//         const data = await res.json();
//         localStorage.setItem("token", data.token);
//         router.push("/");
//       } else {
//         const error = await res.json();
//         alert(error.message || "Something went wrong");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Error connecting to server");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-white">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">
//           {isLogin ? "Login to IdeaBloom" : "Register for IdeaBloom"}
//         </h2>

//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Email</label>
//           <input
//             type="email"
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         <div className="mb-6">
//           <label className="block text-sm font-medium mb-1">Password</label>
//           <input
//             type="password"
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700"
//         >
//           {isLogin ? "Login" : "Register"}
//         </button>

//         <div className="text-sm text-center mt-4">
//           {isLogin ? (
//             <p>
//               Don&apos;t have an account?{" "}
//               <a href="/register" className="text-purple-600 hover:underline">
//                 Register
//               </a>
//             </p>
//           ) : (
//             <p>
//               Already have an account?{" "}
//               <a href="/login" className="text-purple-600 hover:underline">
//                 Login
//               </a>
//             </p>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// }
