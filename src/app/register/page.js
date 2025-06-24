'use client';
import { useEffect, useState } from 'react';

export default function ResultPage() {
  const [text, setText] = useState('');

  useEffect(() => {
    const savedText = localStorage.getItem('generatedText');
    if (savedText) {
      setText(savedText);
    }
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard!');
    });
  };

  const handleRegenerate = () => {
    window.history.back(); // Go back to form page
  };

  const handleDownload = () => {
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'generated_content.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-3xl w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          🎉 Generated Content
        </h1>

        <p className="whitespace-pre-wrap text-gray-700 mb-6">{text}</p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={handleCopy}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            📋 Copy to Clipboard
          </button>
          <button
            onClick={handleDownload}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
          >
            💾 Save to File
          </button>
          <button
            onClick={handleRegenerate}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
          >
            🔄 Regenerate
          </button>
        </div>
      </div>
    </div>
  );
}
