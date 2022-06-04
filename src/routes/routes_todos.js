import express from "express";
import jwt from "jsonwebtoken";

import authenticate from "../middleware/authenticate.js";

import model_todo from "../models/model_todo.js";
import { addTodo, getTodo, getTodoId } from "../DAO/dao_todo.js";

const route_todos = express.Router();

// RETORNA TODOS OS REGISTROS DO USUARIO
// + Recebe "x-access-token" já decodificado como parâmetro da pesquisa no banco de dados, retornando todos os registros do "userId" correspondente

route_todos.get("/", authenticate, (req, res) => {
  const userId = jwt.decode(req.headers["x-access-token"]).id[0].userId;

  getTodo(userId, (callback) => {
    res.send(callback);
  });
});

// ADICIONA NOVO TODO

route_todos.post("/post", authenticate, (req, res) => {
  const userId = jwt.decode(req.headers["x-access-token"]).id[0].userId;

  getTodoId(userId, (todoId) => {
    addTodo(new model_todo(req.body, todoId, userId));
    res.send(`Todo adicionado. ID: ${todoId}`);
  });
});

route_todos.patch("/update", authenticate, (req, res) => {
  res.send("teste");
});

export default route_todos;
