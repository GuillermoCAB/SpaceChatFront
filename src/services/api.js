import axios from 'axios'

const ENDPOINT = 'http://localhost:3333';

const api = axios.create({ baseURL: "https://randomuser.me/api/" });

export { ENDPOINT, api };