import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nodejs-avancado.herokuapp.com/',
});

export async function getMotoristas() {
  const response = await api.get("/motoristas")
  return response;
}