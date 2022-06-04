import { connection } from "./../infra/connect.js";

export default function Login(email, senha, callback)  {
  const sql = `SELECT userId FROM usuarios WHERE email = "${email}" AND senha = ${senha}`;

  connection.query(sql, (error, response, fields) => {
    return callback(error ? "erri" : response)
  });
}