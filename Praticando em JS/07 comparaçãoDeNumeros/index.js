// crie um programa que receba dois valores e compare se o primeiro é maior que o segundo
let valor1 = 10;
let valor2 = 9;

function verificar(valor1, valor2) {
  if (valor1 > valor2) {
    return "O primeirp valor é maior que o segundo.";
  } else if (valor1 < valor2) {
    return "O primeiro valor não é maior que o segundo.";
  }
}

console.log(verificar(valor1, valor2));
