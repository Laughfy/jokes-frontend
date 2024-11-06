import React, { useEffect, useState } from "react";
import { fetchJokeTypes, submitJoke, getRandomJoke } from "../api/jokesApi";
import { Joke } from "../types/jokes";

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
    <div>
      <h1>Jokes Portal</h1>

      <div>
        <h2>Submit a Joke</h2>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
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
        />
        <button onClick={handleSubmitJoke}>Submit Joke</button>
      </div>

      <div>
        <h2>Get a Random Joke</h2>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">Any Type</option>
          {jokeTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <button onClick={handleGetRandomJoke}>Get Joke</button>
        {randomJoke && (
          <div>
            <h3>Random Joke</h3>
            <p>
              <strong>Type:</strong> {randomJoke.type}
            </p>
            <p>{randomJoke.content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
