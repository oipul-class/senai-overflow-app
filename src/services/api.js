import axios from "axios";

const api = axios.create({
  baseURL: "http://10.107.134.12:3333/",
});

api.defaults.headers.common[
  "Authorization"
] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOjEsInN0dWRlbnROYW1lIjoib2lwdWwiLCJpYXQiOjE2MTQ5NzMxMjMsImV4cCI6MTYxNDk3NjcyM30.OkiY9hYLAfu2e6l8-oEtvTLEx3naJ8TYVpVzSo-Lz8E`;

export { api };
