'use client';

import { useState } from 'react';

interface NewsFormData {
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

export default function CreateNewsPage() {
  const [formData, setFormData] = useState<NewsFormData>({
    title: '',
    description: '',
    snippet: '',
    url: '',
    imageUrl: '',
    language: '',
    published: '',
    source: '',
    categories: '',
  });

  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/news', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setMessage('✅ News posted successfully!');
        setFormData({
          title: '',
          description: '',
          snippet: '',
          url: '',
          imageUrl: '',
          language: '',
          published: '',
          source: '',
          categories: '',
        });
      } else {
        setMessage(`❌ Failed: ${data.message}`);
      }
    } catch (error) {
      setMessage('❌ Something went wrong while posting the news.');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Post News</h2>

      {message && (
        <p className="mb-4 text-sm text-center text-blue-600">{message}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border rounded p-2"
          rows={4}
          required
        />
        <input
          type="text"
          name="snippet"
          placeholder="Snippet"
          value={formData.snippet}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
        <input
          type="text"
          name="url"
          placeholder="URL"
          value={formData.url}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={formData.imageUrl}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        <input
          type="text"
          name="language"
          placeholder="Language"
          value={formData.language}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        <input
          type="date"
          name="published"
          value={formData.published}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        <input
          type="text"
          name="source"
          placeholder="Source"
          value={formData.source}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        <input
          type="text"
          name="categories"
          placeholder="Categories"
          value={formData.categories}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
