//Davi Souza De Jesus 24214290011

const prompt = require(prompt-sync)({sigint:true})

function calcularMedia(a, b, c) {

let num1 = parseFloat(prompt("Digite o primeiro número (entre 0 e 100):"));
let num2 = parseFloat(prompt("Digite o segundo número (entre 0 e 100):"));
let num3 = parseFloat(prompt("Digite o terceiro número (entre 0 e 100):"));
if ((num1 >= 0 && num1 <= 100) || (num2 < 0 || num2 > 100) || (num3 < 0 || num3 > 100));
let media = (num1 + num2 + num3)/ 3;
alert(`A média aritmética é: ${media.toFixed(2)}`);
}