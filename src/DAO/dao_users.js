import { connection } from "./../infra/connect.js";

export function addUser(user) {
  const sql = "INSERT INTO usuarios SET ?";

  connection.query(sql, user, (error, response) => {
    console.log(error ? error : response);
  });
}