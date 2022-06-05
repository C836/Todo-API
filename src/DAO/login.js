import { connection } from "./../infra/connect.js";
import CryptoJS from "crypto-js"

export default function Login(email, senha, callback)  {
  const sql = `SELECT userId FROM usuarios WHERE email = "${email}" AND senha = ${CryptoJS.AES.decrypt(senha, process.env.PASSWORDHASH)}`;

  connection.query(sql, (error, response, fields) => {
    return callback(error ? "erri" : response)
  });
}