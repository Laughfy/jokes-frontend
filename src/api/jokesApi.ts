import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:3001";

export const fetchJokeTypes = async () => {
  const response = await axios.get(`${API_BASE_URL}/jokes/types`);
  return response.data;
};

export const submitJoke = async (type: string, content: string) => {
  const response = await axios.post(`${API_BASE_URL}/jokes/submit`, {
    type,
    content,
  });
  return response.data;
};

export const getRandomJoke = async (type?: string) => {
  const url = type
    ? `${API_BASE_URL}/jokes/random?type=${type}`
    : `${API_BASE_URL}/jokes/random`;
  const response = await axios.get(url);
  return response.data;
};
