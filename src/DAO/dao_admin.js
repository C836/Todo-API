import { connection } from "../infra/connect.js";

export function getSuperTodo(status, pag, callback) {
  const sql = `
  SELECT * FROM todos 
  ${status ? ("WHERE status = " + status) : ""}
  ${pag ? "LIMIT " + `${(pag * 10) - 10} , ${(pag * 10)}`  : ""}
  `;

  // pag 1 = (LIMIT 0, 10), pag 2 = (LIMIT 10, 20)

  connection.query(sql, (error, response) => {
    return callback(response);
  });
}
