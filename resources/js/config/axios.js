import axios from "axios";

axios.defaults.withCredentials = true;

const instance = axios.create({
    baseURL: 'http://auto-parts.test/api/',
    timeout: 1000,
});

const sanctum = axios.create({
    baseURL: 'http://auto-parts.test/',
    timeout: 1000,
})

export {instance, sanctum};
