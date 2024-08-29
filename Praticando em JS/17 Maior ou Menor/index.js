let valor1 = 10;
let valor2 = 10;

function maior(valor1, valor2) {
  if ((valor1 = valor2)) {
    return "Os valores digitados são iguais.";
  }
  if (valor1 > valor2) {
    return valor1 + " é o maior e " + valor2 + " é o menor.";
  } else {
    return valor2 + " é o maior " + valor1 + " é o menor.";
  }
}

console.log(maior(valor1, valor2));
