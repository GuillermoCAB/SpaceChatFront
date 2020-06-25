import axios from 'axios'

const ENDPOINT = 'localhost:5000';

const api = axios.create({ baseURL: "https://randomuser.me/api/" });

export {ENDPOINT, api};