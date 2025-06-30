// // app/generate/page.js

// 'use client';
// import { useState } from 'react';

// export default function GeneratePage() {
//   const [topic, setTopic] = useState('');
//   const [platform, setPlatform] = useState('Twitter');
//   const [tone, setTone] = useState('Professional');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // You'll send this to the backend in Step 2
//     console.log({ topic, platform, tone });
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
//       <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-xl">
//         <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
//           ✨ AI-Powered Content Generator
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Topic Input */}
//           <div>
//             <label className="block font-medium mb-1">Topic or Keyword</label>
//             <input
//               type="text"
//               value={topic}
//               onChange={(e) => setTopic(e.target.value)}
//               className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="e.g., Mental health tips"
//               required
//             />
//           </div>

//           {/* Platform Select */}
//           <div>
//             <label className="block font-medium mb-1">Platform</label>
//             <select
//               value={platform}
//               onChange={(e) => setPlatform(e.target.value)}
//               className="w-full border border-gray-300 rounded-lg p-2"
//             >
//               <option>Twitter</option>
//               <option>Instagram</option>
//               <option>Facebook</option>
//               <option>LinkedIn</option>
//             </select>
//           </div>

//           {/* Tone Select */}
//           <div>
//             <label className="block font-medium mb-1">Tone</label>
//             <select
//               value={tone}
//               onChange={(e) => setTone(e.target.value)}
//               className="w-full border border-gray-300 rounded-lg p-2"
//             >
//               <option>Professional</option>
//               <option>Friendly</option>
//               <option>Witty</option>
//               <option>Motivational</option>
//             </select>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
//           >
//             Generate Content 🚀
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
// 'use client';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function GeneratePage() {
//   const router = useRouter();

//   const [topic, setTopic] = useState('');
//   const [platform, setPlatform] = useState('Twitter');
//   const [tone, setTone] = useState('Professional');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:5001/api/generate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ topic, platform, tone }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         router.push(`/result?text=${encodeURIComponent(data.generatedText)}`);
//       } else {
//         alert("Error: " + data.error);
//       }

//     } catch (error) {
//       alert("Request failed: " + error.message);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
//       <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-xl">
//         <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
//           ✨ AI-Powered Content Generator
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block font-medium mb-1">Topic or Keyword</label>
//             <input
//               type="text"
//               value={topic}
//               onChange={(e) => setTopic(e.target.value)}
//               className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="e.g., Mental health tips"
//               required
//             />
//           </div>

//           <div>
//             <label className="block font-medium mb-1">Platform</label>
//             <select
//               value={platform}
//               onChange={(e) => setPlatform(e.target.value)}
//               className="w-full border border-gray-300 rounded-lg p-2"
//             >
//               <option>Twitter</option>
//               <option>Instagram</option>
//               <option>Facebook</option>
//               <option>LinkedIn</option>
//             </select>
//           </div>

//           <div>
//             <label className="block font-medium mb-1">Tone</label>
//             <select
//               value={tone}
//               onChange={(e) => setTone(e.target.value)}
//               className="w-full border border-gray-300 rounded-lg p-2"
//             >
//               <option>Professional</option>
//               <option>Friendly</option>
//               <option>Witty</option>
//               <option>Motivational</option>
//             </select>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
//           >
//             Generate Content 🚀
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
// 'use client';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function GeneratePage() {
//   const router = useRouter();

//   const [topic, setTopic] = useState('');
//   const [content, setContent] = useState('');  // Added content state
//   const [platform, setPlatform] = useState('Twitter');
//   const [tone, setTone] = useState('Professional');
//   const [includeHashtags, setIncludeHashtags] = useState(false);  // renamed
//   const [useEmoji, setUseEmoji] = useState(false);                // renamed

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:5001/api/generate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ topic, content, platform, tone, includeHashtags, useEmoji }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         localStorage.setItem('generatedText', data.generatedText);
//         router.push('/result');
//       } else {
//         alert("Error: " + data.error);
//       }
//     } catch (error) {
//       alert("Request failed: " + error.message);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
//       <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-xl">
//         <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
//           ✨ AI-Powered Content Generator
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block font-medium mb-1">Topic or Keyword</label>
//             <input
//               type="text"
//               value={topic}
//               onChange={(e) => setTopic(e.target.value)}
//               className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="e.g., Mental health tips"
//               required
//             />
//           </div>

//           <div>
//             <label className="block font-medium mb-1">Content (Details)</label>
//             <textarea
//               value={content}
//               onChange={(e) => setContent(e.target.value)}
//               className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Add any detailed content or context here..."
//               rows={4}
//               required
//             />
//           </div>

//           <div>
//             <label className="block font-medium mb-1">Platform</label>
//             <select
//               value={platform}
//               onChange={(e) => setPlatform(e.target.value)}
//               className="w-full border border-gray-300 rounded-lg p-2"
//             >
//               <option>Twitter</option>
//               <option>Instagram</option>
//               <option>Facebook</option>
//               <option>LinkedIn</option>
//             </select>
//           </div>

//           <div>
//             <label className="block font-medium mb-1">Tone</label>
//             <select
//               value={tone}
//               onChange={(e) => setTone(e.target.value)}
//               className="w-full border border-gray-300 rounded-lg p-2"
//             >
//               <option>Professional</option>
//               <option>Friendly</option>
//               <option>Witty</option>
//               <option>Motivational</option>
//             </select>
//           </div>

//           <div className="flex items-center space-x-4">
//             <label className="flex items-center">
//               <input
//                 type="checkbox"
//                 checked={useEmoji}
//                 onChange={() => setUseEmoji(!useEmoji)}
//                 className="mr-2"
//               />
//               Use Emoji
//             </label>
//             <label className="flex items-center">
//               <input
//                 type="checkbox"
//                 checked={includeHashtags}
//                 onChange={() => setIncludeHashtags(!includeHashtags)}
//                 className="mr-2"
//               />
//               Include Hashtags
//             </label>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
//           >
//             Generate Content 🚀
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
// 'use client';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function GeneratePage() {
//   const router = useRouter();

//   const [topic, setTopic] = useState('');
//   const [content, setContent] = useState('');
//   const [platform, setPlatform] = useState('Twitter');
//   const [tone, setTone] = useState('Professional');
//   const [includeHashtags, setIncludeHashtags] = useState(false);
//   const [useEmoji, setUseEmoji] = useState(false);

//   // ✅ New states
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // ✅ Validate form
//     if (!topic.trim() || !platform.trim() || !tone.trim()) {
//       setError('Please fill in all required fields.');
//       return;
//     }

//     setIsLoading(true);
//     setError(null); // Clear any previous error

//     try {
//       const response = await fetch("http://localhost:5001/api/generate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ topic, content, platform, tone, includeHashtags, useEmoji }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         localStorage.setItem('generatedText', data.generatedText);
//         router.push('/result');
//       } else {
//         setError("Error: " + data.error || "Something went wrong.");
//       }
//     } catch (error) {
//       setError("Request failed: " + error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
//       <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-xl">
//         <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
//           ✨ AI-Powered Content Generator
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block font-medium mb-1">Topic or Keyword</label>
//             <input
//               type="text"
//               value={topic}
//               onChange={(e) => setTopic(e.target.value)}
//               className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="e.g., Mental health tips"
//               required
//             />
//           </div>

//           <div>
//             <label className="block font-medium mb-1">Content (Details)</label>
//             <textarea
//               value={content}
//               onChange={(e) => setContent(e.target.value)}
//               className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Add any detailed content or context here..."
//               rows={4}
//               required
//             />
//           </div>

//           <div>
//             <label className="block font-medium mb-1">Platform</label>
//             <select
//               value={platform}
//               onChange={(e) => setPlatform(e.target.value)}
//               className="w-full border border-gray-300 rounded-lg p-2"
//             >
//               <option>Twitter</option>
//               <option>Instagram</option>
//               <option>Facebook</option>
//               <option>LinkedIn</option>
//             </select>
//           </div>

//           <div>
//             <label className="block font-medium mb-1">Tone</label>
//             <select
//               value={tone}
//               onChange={(e) => setTone(e.target.value)}
//               className="w-full border border-gray-300 rounded-lg p-2"
//             >
//               <option>Professional</option>
//               <option>Friendly</option>
//               <option>Witty</option>
//               <option>Motivational</option>
//             </select>
//           </div>

//           <div className="flex items-center space-x-4">
//             <label className="flex items-center">
//               <input
//                 type="checkbox"
//                 checked={useEmoji}
//                 onChange={() => setUseEmoji(!useEmoji)}
//                 className="mr-2"
//               />
//               Use Emoji
//             </label>
//             <label className="flex items-center">
//               <input
//                 type="checkbox"
//                 checked={includeHashtags}
//                 onChange={() => setIncludeHashtags(!includeHashtags)}
//                 className="mr-2"
//               />
//               Include Hashtags
//             </label>
//           </div>

//           {/* ✅ Error Message */}
//           {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

//           {/* ✅ Loading Spinner */}
//           {isLoading && <p className="text-center font-medium text-blue-600">Generating content...</p>}

//           {/* ✅ Submit Button with loading style */}
//           <button
//             type="submit"
//             disabled={isLoading}
//             className={`w-full bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200 ${
//               isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
//             }`}
//           >
//             {isLoading ? "Generating..." : "Generate Content 🚀"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function GeneratePage() {
  const router = useRouter();

  const [topic, setTopic] = useState('');
  const [content, setContent] = useState('');
  const [platform, setPlatform] = useState('Twitter');
  const [tone, setTone] = useState('Professional');
  const [includeHashtags, setIncludeHashtags] = useState(false);
  const [useEmoji, setUseEmoji] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // ✅ Load user settings on page load
  useEffect(() => {
    async function fetchSettings() {
      try {
        const res = await fetch("https://tecprojectbackend.onrender.com/api/user-settings");
        const data = await res.json();
        setPlatform(data.platform);
        setTone(data.tone);
        setIncludeHashtags(data.includeHashtags);
        setUseEmoji(data.useEmoji);
      } catch (err) {
        console.error("Failed to load settings", err);
      }
    }

    fetchSettings();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!topic.trim() || !platform.trim() || !tone.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // ✅ Save preferences before generating content
      await fetch("https://tecprojectbackend.onrender.com/api/user-settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ platform, tone, includeHashtags, useEmoji }),
      });

      const response = await fetch("https://tecprojectbackend.onrender.com/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, content, platform, tone, includeHashtags, useEmoji }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('generatedText', data.generatedText);
        router.push('/result');
      } else {
        alert("Error: " + data.error);
      }
    } catch (error) {
      alert("Request failed: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-6 text-center text-black-800">
          ✨ AI-Powered Content Generator
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Topic Field */}
          <div>
            <label className="block font-medium mb-1">Topic or Keyword</label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>

          {/* Content Field */}
          <div>
            <label className="block font-medium mb-1">Content (Details)</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
              rows={4}
              required
            />
          </div>

          {/* Platform */}
          <div>
            <label className="block font-medium mb-1">Platform</label>
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
            >
              <option>Twitter</option>
              <option>Instagram</option>
              <option>Facebook</option>
              <option>LinkedIn</option>
            </select>
          </div>

          {/* Tone */}
          <div>
            <label className="block font-medium mb-1">Tone</label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
            >
              <option>Professional</option>
              <option>Friendly</option>
              <option>Witty</option>
              <option>Motivational</option>
            </select>
          </div>

          {/* Checkboxes */}
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={useEmoji}
                onChange={() => setUseEmoji(!useEmoji)}
                className="mr-2"
              />
              Use Emoji
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={includeHashtags}
                onChange={() => setIncludeHashtags(!includeHashtags)}
                className="mr-2"
              />
              Include Hashtags
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
            disabled={isLoading}
          >
            {isLoading ? 'Generating...' : 'Generate Content 🚀'}
          </button>
        </form>
      </div>
    </div>
  );
}
