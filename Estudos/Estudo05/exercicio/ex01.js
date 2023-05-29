const nome = 'Raul Erick';
const sobrenome = 'Cordeiro';
let idade = 22;
let peso = 60;
let alturaEmM = 1.70;

let imc = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2023 - idade;

console.log(nome, sobrenome,'tem', idade,'anos, pesa', peso + 'kg','tem', alturaEmM + 'm', 'de altura e seu IMC é de', imc, '\n', nome, 'nasceu em', anoNascimento);

//Outra maneira mais legível de escrever:

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${alturaEmM}m de altura e seu IMC é de: ${imc}. ${nome} nasceu em: ${anoNascimento}`);