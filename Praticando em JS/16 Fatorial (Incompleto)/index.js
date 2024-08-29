function fatorial(valor) {
  let resultado = valor;
  if (valor == 0 || valor == 1) {
    return 1;
  }
  while (valor > 1) {
    valor--;
    resultado *= valor;
  }
  return resultado;
}

console.log(fatorial(10));
