import { connection } from "./../infra/connect.js";
import formatData from "../utils/formatData.js";

export function addTodo(todo) {
  const sql = "INSERT INTO todos SET ?";

  connection.query(sql, todo, (error, response) => {
    console.log(error ? error : response);
  });
}



export function getTodo(id, callback) {
  const sql = `SELECT * FROM todos WHERE userId = "${id}"`;

  connection.query(sql, (error, response) => {
    return callback(error ? error : response);
  });
}




export function getTodoId(id, callback) {
  const sql = `SELECT userId, count(*) as todoId FROM todos WHERE userId GROUP BY userId`;

  connection.query(sql, (error, response) => {
    return callback(
      error ? error : response.length ? response[0].todoId + 1 : 1
    );
  });
}




export function checkTodoStatus(userId, todoId, callback){
  const sql = `SELECT * FROM todos WHERE userId = '${userId}' AND todoId = ${todoId} AND status <> 1`

  connection.query(sql, (error, response) => {
    return callback(response.length ? true : false)
  });
}




export function updateTodo(body, userId, todoId, callback) {
  const sql = `UPDATE todos SET 

  ${body.status && "status = '" + body.status}' , 
  ${body.prazo && "prazo = '" + formatData(body.prazo)}' , 
  ${body.descricao && "descricao = '" + body.descricao}',

  atualizado = '${new Date().toLocaleString("af-ZA")}'

  WHERE userId = '${userId}' AND todoId = ${todoId} ;`;

  connection.query(sql, (error) => {
    return callback(
      error
        ? "Erro, verifique os campos de entrada e tente novamente"
        : "id " + todoId + " atualizado com sucesso"
    );
  });
}