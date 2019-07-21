import axios from "axios";

export const api = axios.create({ baseURL: "http://localhost:3000" });


export const update = (email, password, admin) => {
  return api.put("/users", { email, password, admin });
};

export const login = (email, password) => {
  return api.put("/users/login", { email, password });
};

export const signup = (name, email, password) => {
  return api.post("/users", { name, email, password });
};
