// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

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
//         {/* Logo */}
//         <div className="text-2xl font-extrabold text-purple-600">
//           IdeaBloom 🌸
//         </div>

//         {/* Links */}
//         <div className="space-x-4">
//           {isLoggedIn ? (
//             <button
//               onClick={handleLogout}
//               className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
//             >
//               Logout
//             </button>
//           ) : (
//             <>
//               <a
//                 href="/login"
//                 className="text-purple-600 font-medium hover:text-purple-800"
//               >
//                 Login
//               </a>
//               <a
//                 href="/register"
//                 className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700"
//               >
//                 Register
//               </a>
//             </>
//           )}
//         </div>
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
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  // Check if user is logged in
  useEffect(() => {
    const token = localStorage.getItem("token"); // assuming token is stored
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // clear token
    setIsLoggedIn(false); // update state
    router.push("/login"); // redirect to login
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-pink-50 to-white text-gray-800">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
        {/* Logo and link */}
        <div className="flex items-center space-x-6">
          <div className="text-2xl font-extrabold text-purple-600">
            IdeaBloom 🌸
          </div>
          {isLoggedIn && (
            <Link
              href="/generate"
              className="text-purple-600 font-medium hover:text-purple-800"
            >
              Generate Content
            </Link>
          )}
        </div>

        {/* Auth buttons */}
        <div className="space-x-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
            >
              Logout
            </button>
          ) : (
            <>
              <a
                href="/login"
                className="text-purple-600 font-medium hover:text-purple-800"
              >
                Login
              </a>
              <a
                href="/register"
                className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700"
              >
                Register
              </a>
            </>
          )}
        </div>
      </nav>

      {/* Main content */}
      <main className="flex flex-col items-center justify-center py-24 px-4 text-center">
        <h1 className="text-5xl font-bold text-purple-700 mb-6">
          Welcome to IdeaBloom 🌸
        </h1>
        <p className="text-lg text-gray-700 max-w-xl">
          You are logged in if you see this page. Start bringing your ideas to life with our collaborative platform.
        </p>
      
<div className="mt-6 text-center">
  <Link
    href="/history"
    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition"
  >
    🕘 View History
  </Link>
</div>


      </main>
    </div>
  );
}
