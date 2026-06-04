/*calcular o dobro de um número
let numero = 10;
let dobro = numero * 2;
console.log("Número:", numero);
console.log("Dobro:", dobro);*/

//-------------------------------------------------------------------------

//trocar o valor de duas variáveis sem usar uma terceira variável

/*let a = 5;
let b = 10;
let caixa;
caixa = a;
a = b;
b = caixa;
console.log("Valor de a:", a);
console.log("Valor de b:", b); */

//--------------------------------------------------------------------------

//calcular a média de três notas
/*let nota1 = 7;
let nota2 = 8;
let nota3 = 9;
let media = (nota1 + nota2 + nota3) / 3;
console.log("Média:", media);
*/

//--------------------------------------------------------------------------

//verificar idade e imprimir se a pessoa é maior ou menor de idade

/*let idade = 25;

let nome = "João";

idade= 20;

if (idade >= 18) {
    console.log(nome + " é maior de idade, a idade é " + idade);
} else {
    console.log(nome + " é menor de idade, a idade é");
}

console.log("Nome:", nome);
console.log("Idade:", idade); */

//--------------------------------------------------------------------------

//calcular imc de uma pessoa e fazer a comparação com os valores de referência para classificar o resultado

/*let peso = 80;
let altura = 1.75;
let imc = peso / (altura * altura);
console.log("IMC:", imc);

if (imc <= 18.5) {
    console.log("Abaixo do peso");
} else if (imc >= 18.6 && imc <= 24.9) {
    console.log("Peso normal");
} else if (imc >= 30) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidade");
}
*/

let numero;
numero = 10;

if (numero % 2 === 0) {
    console.log("O número", numero, "é par");
} else {
    console.log("O número", numero, "é ímpar");
}

