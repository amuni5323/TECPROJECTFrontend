"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthForm({ isLogin }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your login or register logic here

    // After successful login, redirect to home
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <form 
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-md p-8 max-w-md w-full"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          {isLogin ? "Login to Your Account" : "Create a New Account"}
        </h2>

        <label className="block mb-2 text-gray-700 font-medium" htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="you@example.com"
        />

        <label className="block mb-2 text-gray-700 font-medium" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Enter your password"
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-colors"
        >
          {isLogin ? "Login" : "Register"}
        </button>
      </form>
    </div>
  );
}
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
