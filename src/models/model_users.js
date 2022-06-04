import { v4 as uuidv4 } from "uuid";

export default class Users {
  constructor(user) {
    this.userId = uuidv4(),
    this.email = user.email,
    this.senha = user.senha;
  }
};
