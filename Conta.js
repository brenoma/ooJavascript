export class Conta {
  cliente;
  agencia;
  numero;
  static count = 0;
  saldo = 0;


  constructor(numero, agencia, cliente) {
    this.cliente = cliente;
    this.agencia = agencia;
    this.numero = numero;
    Conta.count += 1;
  }

  sacar(valor) {
    if(this.saldo < valor) {
      console.log("Valor sacado maior que seu saldo.");
      return valor;
    }
    this.saldo -= valor;
    return valor;
  }

  depositar(valor) {
    if(valor < 0) {
      console.log("Valor inválido.");
      return valor;
    }
    this.saldo += valor;
    return valor;
  }

  /*
  *   GETTERS AND SETTERS
  */

  get saldo() {
    return this.saldo;
  }

  get cliente() {
    return this.cliente;
  }

  set cliente(value) {
    if(value instanceof Cliente){
      this.cliente = value;
    }
  }

  transferir(valor, conta) {
    if(valor > this.saldo || valor < 0) {
      console.log("Valor inválido ou saldo insuficiente. Operação não realizada")
      return;
    }
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
    return valor;
  }
}