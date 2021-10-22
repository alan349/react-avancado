import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6171d87bc20f3a001705ff0b.mockapi.io/api/v1/checkout',
});

export default async function createMovie(data) {
  const response = await api.post("/", data);
  return response;
}