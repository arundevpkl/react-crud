import http from "./http";
const getAll = () => {
    return http.get("/users");
  };

  const UserService = {
    getAll,
   
  
  };
  export default UserService;