class Database {
  init(connection) {
    this.connection = connection;

    this.createDatabase();
  }

  createDatabase() {
    const sql = `
        CREATE DATABASE IF NOT EXISTS todos;`
    this.connection.query(sql, (error) => {
      if (error) console.log(error);
    });
  }
}

export default new Database();
