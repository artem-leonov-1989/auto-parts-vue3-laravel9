import axios from "axios";

axios.defaults.withCredentials = true;

const instance = axios.create({
    baseURL: 'http://auto-parts.test/api/',
    timeout: 1000,
});

export {instance};
