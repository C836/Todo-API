import { connection } from "./../infra/connect.js";

class Todos {
  addTodo(todo) {
    const sql = "INSERT INTO todos SET ?";

    connection.query(sql, todo, (error, response) => {
      console.log(error ? error : response);
    });
  }
};

export default new Todos