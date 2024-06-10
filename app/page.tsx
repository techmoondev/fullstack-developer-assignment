"use client"
import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async () => {
    // Implement the submit logic here
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md">
        <input
          type="text"
          value={prompt}
          onChange={handleChange}
          placeholder="Enter your prompt"
          className="border p-2 rounded w-full"
        />
        <button
          onClick={handleSubmit}
          className="mt-4 bg-blue-500 text-white p-2 rounded"
        >
          Generate Posts
        </button>
      </div>
    </div>
  );
}
