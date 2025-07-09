'use client';
import { useEffect, useState } from 'react';

export default function HistoryPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch('https://tecprojectbackend.onrender.com/api/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Failed to fetch history:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  const deletePost = async (id) => {
    try {
      await fetch(`https://tecprojectbackend.onrender.com/api/posts/${id}`, {
        method: 'DELETE',
      });
      setPosts(posts.filter((p) => p.id !== id));
    } catch (err) {
      console.error('Delete failed:', err.message);
    }
  };

  return (
    <div className="min-h-screen px-4 py-10 bg-gray-100">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-6 text-black ">🕘 Post History</h1>

        {loading ? (
          <p>Loading...</p>
        ) : posts.length === 0 ? (
          <p>No history yet.</p>
        ) : (
          <ul className="space-y-4">
            {posts.map((post) => (
              <li key={post.id} className="bg-gray-50 p-4 rounded-lg border relative">
                {/* Delete Button */}
                <button
                  onClick={() => deletePost(post.id)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                  title="Delete Post"
                >
                  🗑️
                </button>

                {/* Meta Info */}
                <div className="text-sm text-black mb-2">
                  <span className="font-semibold">Date:</span>{' '}
                  {new Date(post.createdAt).toLocaleString()}
                  <br />
                  <span className="font-semibold">Platform:</span> {post.platform || 'N/A'} &nbsp;|&nbsp;
                  <span className="font-semibold">Tone:</span> {post.tone || 'N/A'}
                </div>

                {/* Post Content */}
                <div className="whitespace-pre-line text-black">{post.content}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
