import mysql from "mysql";

export default async function createDatabase() {
  const con = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
  });

  return new Promise((resolve, reject) => {
    con.connect((err) => {
      if (err) throw err;
      con.query("CREATE DATABASE IF NOT EXISTS todos ", (err, result) => {
        if (err) reject(error)
        resolve(result)
      });
    })}
  )
}
