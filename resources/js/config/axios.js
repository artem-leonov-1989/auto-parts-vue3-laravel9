import axios from "axios";

const instance = axios.create({
    baseURL: 'http://auto-parts.test/api/',
    timeout: 1000,
});

export {instance};
