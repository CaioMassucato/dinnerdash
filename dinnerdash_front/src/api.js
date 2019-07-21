import axios from "axios";

export const api = axios.create({ baseURL: "http://localhost:3000" });

export const update = (email, password, admin) => {
  return api.put("/users", { email, password, admin });
};
