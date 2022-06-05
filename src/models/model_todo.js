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
    let data = prazo.split('/')
    return `${data[2]}/${data[1]}/${data[0]}`
  }
};