import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {

  constructor(numero, agencia, cliente) {
    super(numero, agencia, cliente);
  }
}