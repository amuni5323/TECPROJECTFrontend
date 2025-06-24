'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ResultPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const topic = searchParams.get('topic');
  const platform = searchParams.get('platform');
  const tone = searchParams.get('tone');

  useEffect(() => {
    const fetchGeneratedContent = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ topic, platform, tone }),
        });

        const data = await response.json();

        if (response.ok) {
          setContent(data.generatedText);
        } else {
          setContent("Error: " + data.error);
        }
      } catch (error) {
        setContent("Request failed: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    if (topic && platform && tone) {
      fetchGeneratedContent();
    } else {
      setContent("Missing query parameters.");
      setLoading(false);
    }
  }, [topic, platform, tone]);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    alert("Copied to clipboard!");
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
            <div className="whitespace-pre-wrap bg-gray-100 p-4 rounded-lg border border-gray-300 mb-6 text-gray-800">
              {content}
            </div>

            <div className="flex justify-between">
              <button
                onClick={handleRegenerate}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg"
              >
                🔄 Regenerate
              </button>

              <button
                onClick={handleCopy}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg"
              >
                📋 Copy
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
