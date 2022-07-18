import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://auto-parts.test/api/',
    timeout: 5000,
});

export {axiosInstance};
