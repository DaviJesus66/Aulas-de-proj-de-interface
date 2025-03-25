//Davi Souza De Jesus 24214290011
//1) Escreva um programa em JS que tem como entrada 3 números reais entre 0 e 100, inclusive. A saída do programa retorna a média aritmética desses números.
var n1 = 89;
var n2 = 97;
var n3 = 30;
var soma = n1 + n2 + n3;
var media = (n1 + n2 + n3)/3;
//var média = soma/3;
if(n1 >=0 && n1 <= 100 && n2 >=0 && n2 <= 100 && n3 >=0 && n3 <= 100 ){
    console.log (`A média aritmetca entre os números ${n1}, ${n2}, ${n3} é ${media}.`)
} else {
    console.log (" Algumas das entradas não está no intervalo [0,100].")
}

//2) Escreva um programa em JS em que o usuário entra com 3 números reais entre 0 e 100, inclusive. A saída do programa retorna a média aritmética desses números.
//Davi Souza De Jesus 24214290011
const prompt = require('prompt-sync')({sigint : true});

var n1 = (prompt("Digite um número entre 0 e 100, inclusive: "));
var n2 = (prompt("Digite um número entre 0 e 100, inclusive: "));
var n3 = (prompt("Digite um número entre 0 e 100, inclusive: "));
let media = (num1 + num2 + num3)/3;
if(n1 >=0 && n1 <= 100 && n2 >=0 && n2 <= 100 && n3 >=0 && n3 <= 100 ){
    console.log (`A média aritmetca entre os números ${n1}, ${n2}, ${n3} é ${media}.`)
} else {
    console.log (" Algumas das entradas não está no intervalo [0,100].")
}
// comsole.log(8090100/3)

//3) Escreva um programa em JS que calcule a média aritmética ponderada. Como entrada  serão 3 valores entre 0 e 10, e 3 pesos entre 0 e 1, cuja soma seja 1.
var n1 = (prompt("Digite um número entre 0 e 10, inclusive: "));
var n2 = (prompt("Digite um número entre 0 e 10, inclusive: "));
var n3 = (prompt("Digite um número entre 0 e 10, inclusive: "));
let media = (num1 + num2 + num3)/3;