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

const UserService = {
  getAll,
  create,
  remove


};
export default UserService;