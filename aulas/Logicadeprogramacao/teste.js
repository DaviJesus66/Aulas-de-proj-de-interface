const prompt = require("prompt-sync")({sigint : true})
console.log("Uma noite de lua cheia")
var n1 = parseFloat(prompt("Digite o primeiro número: "));
var n2 = parseFloat(prompt("Digite o segundoo número: "));
var soma = n1 + n2;
console.log(soma);