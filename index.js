import express from "express";
import { connection } from "./src/infra/connect.js";
import Database from "./src/infra/database.js";
import Tables from "./src/infra/tables.js"
import bodyParser from "body-parser"

import route_users from "./src/routes/routes_users.js"
import route_todos from "./src/routes/routes_todos.js";
import routes_admin from "./src/routes/routes_admin.js";
import createDatabase from "./src/infra/database.js";

const app = express();
app.use(bodyParser.json())

const PORT = 3010;

connection.connect(error => {
  if (error) {
    console.log(error)
  } else {
    createDatabase(connection)
    Tables.init(connection)
    app.listen(PORT, () => `Servidor rodando na porta ${PORT}`);
  }
});


// PUBLIC 
app.use("/users", route_users)


// REQUER AUTENTICAÇÃO
app.use("/todos", route_todos)


// ROTAS DE ADMIN
app.use("/super", routes_admin)


