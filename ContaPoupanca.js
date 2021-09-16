import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{

  constructor(numero, agencia, cliente) {
    super(numero, agencia, cliente);
  }
}