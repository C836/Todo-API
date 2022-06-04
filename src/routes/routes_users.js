import express from "express";

import model_users from "../models/model_users.js";
import dao_users from "../DAO/dao_users.js";

import Login from "../DAO/login.js";
import success from "../controllers/control_users.js";
import "dotenv/config";

const route_users = express.Router();

// REGISTRO

route_users.post("/new", (req, res) => {
  const body = req.body;

  dao_users.addUser(new model_users(body));
  res.send(`Usuário adicionado`);
});

//LOGIN

route_users.post("/login", (req, res) => {
  Login(req.body.email, req.body.senha, (callback) => {
    res.send(callback.length ? success(callback) : "Credenciais invalidas");
  });
});

//LOGOUT

route_users.post("/logout", (req, res) => {
  res.json({ auth: false, token: null });
});


export default route_users;