import http from "./http";

const getAll = () => {
  return http.get("/users");
};

const create = data => {
  return http.post("/users", data);
};

const remove = id => {
  return http.delete(`/users/${id}`);
};

const update = (id, data) => {
  return http.put(`/users/${id}`, data);
};

const get = id => {
  return http.get(`/users/${id}`);
};

const UserService = {
  getAll,
  create,
  remove,
  update,
  get


};
export default UserService;