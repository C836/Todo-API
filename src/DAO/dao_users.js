import { connection } from "./../infra/connect.js";

class Users {
  addUser(user) {
    const sql = "INSERT INTO usuarios SET ?";

    connection.query(sql, user, (error, response) => {
      console.log(error ? error : response);
    });
  }
};

export default new Users