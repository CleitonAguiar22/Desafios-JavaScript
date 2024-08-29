// Cauculadora

let valor1 = 5;
let valor2 = 10;
let operador = "*";

function operacao(valor1, valor2, operador) {
  if (operador == "+" || operador == "adição") {
    return valor1 + valor2;
  }
  if (operador == "-" || operador == "subtração") {
    return valor1 - valor2;
  }
  if (operador == "*" || operador == "multiplicação") {
    return valor1 * valor2;
  }
  if (operador == "/" || operador == "divisão") {
    return valor1 / valor2;
  }
}

console.log(operacao(valor1, valor2, operador));
