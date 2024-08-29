// codigo que calcula o IMC recebendo os dados de altura e peso

let altura = 1.77; // variavel de altura
let peso = 65; // variavel de peso

function calcularIMC(altura, peso) {
  const calculo = peso / (altura * altura);
  console.log(
    `Sua altura é ${altura}, seu peso é ${peso} e seu Índice de Massa Corporal é: ${calculo.toFixed(
      2
    )}`
  );
} //Função que calcula o IMC de uma pessoa dado os parâmetros altura e peso

calcularIMC(altura, peso); // Chamada da função calcularIMC
