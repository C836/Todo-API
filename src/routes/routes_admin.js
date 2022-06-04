import express from "express";
import { getSuperTodo } from "../DAO/dao_admin.js";

const routes_admin = express.Router()

routes_admin.get("/todos/:pag?", (req, res) => {
    const status = req.headers['status'];
    const pag = req.params.pag

    getSuperTodo(status, Number(pag), callback => {
        res.send(callback)
    })
})

export default routes_admin