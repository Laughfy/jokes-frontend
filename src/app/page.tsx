"use client";

import React, { useEffect, useState } from "react";
import { fetchJokeTypes, submitJoke, getRandomJoke } from "./api/jokesApi";
import { Joke } from "./types/jokes";

const HomePage: React.FC = () => {
  const [jokeTypes, setJokeTypes] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string>("");
  const [jokeContent, setJokeContent] = useState<string>("");
  const [randomJoke, setRandomJoke] = useState<Joke | null>(null);

  useEffect(() => {
    fetchJokeTypes().then(setJokeTypes);
  }, []);

  const handleSubmitJoke = async () => {
    if (selectedType && jokeContent) {
      await submitJoke(selectedType, jokeContent);
      setJokeContent("");
      alert("Joke submitted!");
    } else {
      alert("Please select a type and enter joke content.");
    }
  };

  const handleGetRandomJoke = async () => {
    const joke = await getRandomJoke(selectedType);
    setRandomJoke(joke);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">Jokes Portal</h1>

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Submit a Joke
        </h2>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        >
          <option value="">Select Joke Type</option>
          {jokeTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Enter your joke"
          value={jokeContent}
          onChange={(e) => setJokeContent(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button
          onClick={handleSubmitJoke}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Submit Joke
        </button>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Get a Random Joke
        </h2>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        >
          <option value="">Any Type</option>
          {jokeTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <button
          onClick={handleGetRandomJoke}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors"
        >
          Get Joke
        </button>

        {randomJoke && (
          <div className="mt-6 bg-gray-50 p-4 rounded">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Random Joke
            </h3>
            <p className="text-gray-600">
              <strong>Type:</strong> {randomJoke.type}
            </p>
            <p className="text-gray-700 mt-2">{randomJoke.content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
