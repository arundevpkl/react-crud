import http from "./http";
const getAll = () => {
    return http.get("/users");
  };
  const create = data => {
    return http.post("/users", data);
  };
  const UserService = {
    getAll,
    create
   
  
  };
  export default UserService;