import axios from 'axios';

const loginApi = axios.create({
    baseURL: 'https://reqres.in/api/login',
});

export async function authenticate(login, password) {
    const response = await loginApi.post("/", {
        "email": login,
        "password": password
    })
    return response;
}
