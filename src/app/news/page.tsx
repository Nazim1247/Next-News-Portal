'use client';

import { useEffect, useState } from 'react';

interface NewsItem {
  _id: string;
  title: string;
  description: string;
  snippet: string;
  url: string;
  imageUrl: string;
  language: string;
  published: string;
  source: string;
  categories: string;
}

export default function NewsPage() {
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch('/api/news');
      const data = await res.json();
      setNewsList(data.data);
      setLoading(false);
    };

    fetchNews();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading news...</p>;

  return (
    <div className='max-w-6xl mx-auto my-6'>
      <h1 className="text-2xl mb-4 font-bold text-center">Latest News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {newsList.map((item) => (
        <div
          key={item._id}
          className="border rounded-lg p-4 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-1">{item.title}</h2>
          <p className="text-gray-600 mb-2">{item.snippet}</p>
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-48 object-cover rounded"
          />
          <div className="text-sm text-gray-500 mt-2">
            Source: {item.source} | Language: {item.language} |{" "}
            {new Date(item.published).toLocaleDateString()}
          </div>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 mt-2 inline-block"
          >
            Read Full News →
          </a>
        </div>
      ))}
    </div>
    </div>
  );
}
