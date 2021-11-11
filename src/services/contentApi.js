import axios from 'axios';

const api = axios.create({
    baseURL: 'https://nodejs-avancado.herokuapp.com/',
});

export async function getMotoristas() {
    const response = await api.get("/motoristas")
    return response;
}

export async function getVeiculos() {
    const response = await api.get("/veiculos")
    return response;
}

export async function removeVeiculo(id) {
    const response = await api.delete(`/veiculos/${id}`);
    return response;
}

export async function addVeiculo(data) {
    const response = await api.post("/veiculos", data);
    return response;
}

export async function updateVeiculo(data) {
    const response = await api.put("/veiculos", data)
    return response;
}
