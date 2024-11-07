import axios from "axios";

const API_BASE_URL = "http://localhost";

export const fetchJokeTypes = async () => {
  const response = await axios.get(`${API_BASE_URL}:3001/jokes/types`);
  return response.data;
};

export const submitJoke = async (type: string, content: string) => {
  const response = await axios.post(`${API_BASE_URL}:3001/jokes/submit`, {
    type,
    content,
  });
  return response.data;
};

export const getRandomJoke = async (type?: string) => {
  const url = type
    ? `${API_BASE_URL}:3002/jokes/random?type=${type}`
    : `${API_BASE_URL}:3002/jokes/random`;
  const response = await axios.get(url);
  return response.data;
};
