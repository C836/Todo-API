export default class Todos {
  constructor(todo, todoId, userId) {
    this.userId = userId
    this.todoId = todoId
    this.status = 0
    this.criado = this.getTime(),
    this.atualizado = null
    this.prazo = this.getPrazo(todo.prazo);
    this.descricao = todo.descricao
  }

  getTime(){
    return new Date().toLocaleString('af-ZA');
  }

  getPrazo(prazo){
    let date = prazo.split('/')
    return new Date(date[2], date[1], date[0]).toLocaleDateString('af-ZA');
  }
};

            // todoId int,
            // status int,
            // prazo datetime,
            // descricao varchar(1000),
            // PRIMARY KEY (todoId),
            // FOREIGN KEY (id) REFERENCES usuarios(id))`;
