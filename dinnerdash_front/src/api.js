import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3000" });

export const login = (email, password) => {
  return api.put("/users/login", { email, password });
};

export const signup = (name, email, password) => {
  return api.post("/users", { name, email, password });
};
