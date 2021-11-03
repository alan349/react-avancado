import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
  baseURL: 'https://q50wzro7b2.execute-api.us-east-1.amazonaws.com/',
});

api.interceptors.request.use((config) => {
  const token = getToken();
  config.headers.authorization = `Bearer ${token}`;
  return config;
})

export default async function createMovie(data) {
  const response = await api.post("/movies", data);
  return response;
}

export async function getMovies() {
  const response = await api.get("/movies")
  return response;
}

export async function authenticate(login, password) {
  const response = await api.post("/authenticate", {
    login: login,
    password: password
  })
  return response;
}

export async function removeMovie(id) {
  const response = await api.delete(`/movies/${id}`);
  return response;
}

export async function updateMovie(id, data) {
  const response = await api.put(`/movies/${id}`, data);
  return response;
}

export async function getMovieById(id) {
  const response = await api.get(`/movies/${id}`);
  return response;
}
