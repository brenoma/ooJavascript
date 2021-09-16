import {Cliente} from './Cliente.js';
import { ContaPoupanca } from './ContaPoupanca.js';
import { ContaCorrente } from './ContaCorrente.js';
import { Conta } from './Conta.js';

const cliente1 = new Cliente("Breno", 12312312333);
const cc1 = new ContaCorrente(1234, 3333, cliente1);
// cc1.cliente = 123
// cc1.cliente.cpf = 11111111111;
const cliente2 = new Cliente("Wesley", 11111111111);
const cc2 = new ContaPoupanca(4321, 3333, cliente2);

const cliente3 = new Cliente("Tester", 12312332122);
const cc3 = new ContaCorrente(1234, 3333, cliente3);

// cc1.depositar(200);
// console.log(cc1.saldo)
// cc1.transferir(201, cc2)
// console.log(cc1.saldo)
// console.log(cc2.saldo)

console.log(cc1)
console.log(cc2)
console.log(cc3)
console.log(`\nNúmero Total de Contas: ${Conta.count}\n`)