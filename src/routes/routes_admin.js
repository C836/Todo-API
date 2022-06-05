import express from "express";
import jwt from "jsonwebtoken"
import authenticate from "../middleware/authenticate.js";
import { getSuperTodo } from "../DAO/dao_admin.js";
import { randomUUID } from "crypto";

const routes_admin = express.Router();

// LOGIN
routes_admin.post("/login", (req, res) => {
  if (
    req.body.email === process.env.ADMIN_EMAIL &&
    req.body.senha === process.env.ADMIN_PASS) 
    {
        const token = jwt.sign( { id: randomUUID() } , process.env.ADMIN_TOKEN_SECRET);
        res.send({ auth: true, token: token });
    }
    else {
        res.send("Erro, credenciais invalidas")
    }
});


routes_admin.get("/todos/:pag?", authenticate ,(req, res) => {
  const status = req.headers["status"];
  const pag = req.params.pag;

  getSuperTodo(status, Number(pag), (callback) => {
    res.send(callback);
  });
});

export default routes_admin;
