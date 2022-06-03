import express from "express";
import { connection } from "./src/infra/connect.js";
import Database from "./src/infra/database.js";
import Tables from "./src/infra/tables.js"
import bodyParser from "body-parser"


const app = express();
app.use(bodyParser.json())

const PORT = 3010;

connection.connect(error => {
  if (error) {
    console.log(error)
  } else {
    Database.init(connection)
    Tables.init(connection)
    app.listen(PORT, () => `Servidor rodando na porta ${PORT}`);
  }
});

