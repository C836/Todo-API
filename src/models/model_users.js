import { v4 as uuidv4 } from "uuid";
import CryptoJS from "crypto-js"

export default class Users {
  constructor(user) {
    this.userId = uuidv4(),
    this.email = user.email,
    this.senha = this.password(user.senha);
  }

  password(senha){
    return CryptoJS.AES.encrypt(senha, process.env.PASSWORDHASH).toString();
  }
};
