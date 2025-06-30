// 'use client';
// import { useSearchParams, useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';

// export default function ResultPage() {
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const [content, setContent] = useState('');
//   const [loading, setLoading] = useState(true);
//   const topic = searchParams.get('topic');
//   const platform = searchParams.get('platform');
//   const tone = searchParams.get('tone');

//   useEffect(() => {
//     const fetchGeneratedContent = async () => {
//       try {
//         const response = await fetch("http://localhost:5001/api/generate", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ topic, platform, tone }),
//         });

//         const data = await response.json();

//         if (response.ok) {
//           setContent(data.generatedText);
//         } else {
//           setContent("Error: " + data.error);
//         }
//       } catch (error) {
//         setContent("Request failed: " + error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (topic && platform && tone) {
//       fetchGeneratedContent();
//     } else {
//       setContent("Missing query parameters.");
//       setLoading(false);
//     }
//   }, [topic, platform, tone]);

//   const handleCopy = () => {
//     navigator.clipboard.writeText(content);
//     alert("Copied to clipboard!");
//   };

//   const handleRegenerate = () => {
//     router.push('/generate');
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
//       <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl">
//         <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
//           🎉 Generated Content
//         </h1>

//         {loading ? (
//           <p className="text-center text-gray-500">Loading...</p>
//         ) : (
//           <>
//             <div className="whitespace-pre-wrap bg-gray-100 p-4 rounded-lg border border-gray-300 mb-6 text-gray-800">
//               {content}
//             </div>

//             <div className="flex justify-between">
//               <button
//                 onClick={handleRegenerate}
//                 className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg"
//               >
//                 🔄 Regenerate
//               </button>

//               <button
//                 onClick={handleCopy}
//                 className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg"
//               >
//                 📋 Copy
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }


/* hhhhhhhhhhhhh */
// 'use client';
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function ResultPage() {
//   const [content, setContent] = useState('');
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const storedContent = localStorage.getItem('generatedText');
//     if (storedContent) {
//       setContent(storedContent);
//     } else {
//       setContent('No generated content found. Please generate some content first.');
//     }
//     setLoading(false);
//   }, []);

//   const handleCopy = () => {
//     if (content) {
//       navigator.clipboard.writeText(content);
//       alert('Copied to clipboard!');
//     }
//   };

//   const handleRegenerate = () => {
//     router.push('/generate');
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
//       <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl">
//         <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
//           🎉 Generated Content
//         </h1>

//         {loading ? (
//           <p className="text-center text-gray-500">Loading...</p>
//         ) : (
//           <>
//             <div className="whitespace-pre-wrap bg-gray-100 p-4 rounded-lg border border-gray-300 mb-6 text-gray-800">
//               {content}
//             </div>

//             <div className="flex justify-between">
//               <button
//                 onClick={handleRegenerate}
//                 className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg"
//               >
//                 🔄 Regenerate
//               </button>

//               <button
//                 onClick={handleCopy}
//                 className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg"
//               >
//                 📋 Copy
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import jsPDF from 'jspdf';

export default function ResultPage() {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState('');
  const router = useRouter();

  useEffect(() => {
    const storedContent = localStorage.getItem('generatedText');
    if (storedContent) {
      setContent(storedContent);
    } else {
      setContent('No generated content found. Please generate some content first.');
    }
    setLoading(false);
  }, []);

  // Show notification temporarily
  const showNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(''), 2500);
  };

  const handleCopy = () => {
    if (content) {
      navigator.clipboard.writeText(content);
      showNotification('Copied to clipboard!');
    }
  };

  const handleDownloadPDF = () => {
    if (!content) return;
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 10;
    const maxLineWidth = pageWidth - margin * 2;
    const lines = doc.splitTextToSize(content, maxLineWidth);
    doc.text(lines, margin, 20);
    doc.save('generated-content.pdf');
    showNotification('PDF downloaded!');
  };

  const handleRegenerate = () => {
    router.push('/generate');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          🎉 Generated Content
        </h1>

        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <>
            <div
              className="whitespace-pre-wrap bg-gray-100 p-4 rounded-lg border border-gray-300 mb-6 text-gray-800 min-h-[150px] max-h-[400px] overflow-auto"
              aria-label="Generated content"
            >
              {content}
            </div>

            {notification && (
              <div
                className="mb-4 text-center text-sm text-green-700 bg-green-100 p-2 rounded"
                role="alert"
              >
                {notification}
              </div>
            )}

            <div className="flex flex-col sm:flex-row justify-between gap-3">
              <button
                onClick={handleRegenerate}
                disabled={loading}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                🔄 Regenerate
              </button>

              <button
                onClick={handleCopy}
                disabled={loading || !content}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                📋 Copy
              </button>

              <button
                onClick={handleDownloadPDF}
                disabled={loading || !content}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                📄 Download as PDF
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
