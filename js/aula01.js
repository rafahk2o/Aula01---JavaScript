// // String tCaractere
// Int - Inteiro
// Float - Reais


// var nomeCompleto = "Rafael Silva"; 

// var idade = 18;


// constantes não podem sofrer alterações
// const numeroPi = 3.14;


// let nomeCompleto = "Rafael Silva";

// alert(nomeCompleto);

// console.log(nomeCompleto);

// nome idade cargo salario

let nome = prompt("Digite o seu nome: ")
let idade = prompt("Digite a sua idade: ")
let cargo = prompt("Digite o seu cargo: ")
let salario = prompt("Digite o seu salário: ")

// console.log(nome + " com a idade de: " + idade + " anos " + " tem o cargo de: " +  cargo + " e ganha um salário de: " + salario + " reais .");


// let a = 20;
// let b = 60;

// console.log(a*b)

document.getElementById("texto").innerHTML = "Nome: " + nome;
document.getElementById("idade").innerHTML = "Idade: " + idade;
document.getElementById("cargo").innerHTML = "Cargo: " + cargo;
document.getElementById("salario").innerHTML = "Salário: " + salario/2;

// parseInt() - Converte texto para Inteiro
// parseFloat() - Converte texto para real

// document.querySelector("#texto").innerHTML = "Olá mundo";