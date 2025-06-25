'use client';

import { useState } from 'react';

export default function CreateNewsPage() {
  const [formData, setFormData] = useState({
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
// console.log(formData)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/news', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (data.success) {
      alert('News Posted Successfully!');
    } else {
      alert('Failed: ' + data.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Post News</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.keys(formData).map((key) => (
          <input
            key={key}
            type="text"
            name={key}
            placeholder={key}
            value={(formData as any)[key]}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        ))}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
