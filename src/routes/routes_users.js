import express from "express";

import model_users from "../models/model_users.js";
import addUser from "./../DAO/dao_users.js"

import Login from "../DAO/login.js";
import success from "../controllers/control_users.js";
import "dotenv/config";

const route_users = express.Router();

// REGISTRO

route_users.post("/signup", (req, res) => {
  const body = req.body;

  addUser(new model_users(body));
  res.send(`Usuário adicionado`);
});

//LOGIN

route_users.post("/login", (req, res) => {
  Login(req.body.email, req.body.senha, (callback) => {
    res.send(callback.length ? success(callback) : "Credenciais invalidas");
  });
}); 


export default route_users;