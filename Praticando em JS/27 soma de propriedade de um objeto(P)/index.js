function somarValores(objeto) {
  // Obtém um array com todos os valores das propriedades do objeto
  const valores = Object.values(objeto);

  // Soma todos os valores usando reduce
  const soma = valores.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual,
    0
  );

  return soma;
}

// Exemplo de uso
const objetoNumerico = {
  a: 10,
  b: 20,
  c: 30,
  d: 40,
};

const resultado = somarValores(objetoNumerico);
console.log(resultado); // Saída: 100
