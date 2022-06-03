import mysql from "mysql"
import "dotenv/config"

export const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.SQLPASSWORD,
    database: "todos"
})