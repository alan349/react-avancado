import axios from 'axios';

const api = axios.create({
  baseURL: 'https://q50wzro7b2.execute-api.us-east-1.amazonaws.com/',
});

export default async function createMovie(data) {
  const response = await api.post("/movies", data);
  return response;
}