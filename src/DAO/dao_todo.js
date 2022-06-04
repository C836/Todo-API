import { connection } from "./../infra/connect.js";

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

export function getTodoId(id, callback){
  const sql = `SELECT userId, count(*) as todoId FROM todos GROUP BY userId`;

  connection.query(sql, (error, response) => {
    return callback(error ? error : response.length ? response[0].todoId + 1 : 1);
  });
}
