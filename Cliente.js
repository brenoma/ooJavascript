export class Cliente {
  nome;
  cpf;

  get cpf() {
    return this.cpf;
  }
  constructor(nome, cpf) {
    if(nome != null && cpf != null) {
      this.nome = nome;
      this.cpf = cpf;
      return;
    }
    console.log("ERRR")
  }
}