class Tables {
  init(connection) {
    this.connection = connection;

    this.createUsers();
    this.createTodos();
  }

  createUsers() {
    const sql = `
            CREATE TABLE IF NOT EXISTS usuarios (
            userId varchar(36),
            email varchar(50),
            senha varchar(255),
            PRIMARY KEY(userId))`;
    this.connection.query(sql, (error) => {
      if (error) console.log(error);
    });
  }

  createTodos() {
    const sql = `
            CREATE TABLE IF NOT EXISTS todos (
            userId varchar(36),
            todoId int,
            status int,
            criado date,
            atualizado datetime,
            prazo date,
            descricao varchar(1000),
            FOREIGN KEY (userId) REFERENCES usuarios(userId))`;
    this.connection.query(sql, (error) => {
      if (error) console.log(error);
    });
  }
}

export default new Tables();
