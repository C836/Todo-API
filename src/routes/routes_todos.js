import express from "express";
import jwt from "jsonwebtoken";

import authenticate from "../middleware/authenticate.js";

import model_todo from "../models/model_todo.js";
import {
  addTodo,
  checkTodoStatus,
  getTodo,
  getTodoId,
  updateTodo,
} from "../DAO/dao_todo.js";
import { todoValidate } from "../controllers/control_todos.js";

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

route_todos.patch("/update/:id", authenticate, (req, res) => {
  const userId = jwt.decode(req.headers["x-access-token"]).id[0].userId;
  const todoId = req.params.id;
  const body = req.body;

  checkTodoStatus(userId, todoId, (callback) => {
    if(!callback) return res.send("Tarefas concluidas não podem ser atualizadas!")

    if (todoValidate(body)) {
      updateTodo(body, userId, todoId, (callback) => {
        res.send(callback);
      });
    } else {
      res.send("Erro, verifique os campos de entrada e tente novamente");
    }
  });
});

export default route_todos;
