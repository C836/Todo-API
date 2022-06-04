import { connection } from "./connect.js";

export default function createDatabase(){
  const sql = `CREATE DATABASE IF NOT EXISTS todos`

  connection.query(sql, (error, response) => {
    console.log(error ? error : response)
  });
}