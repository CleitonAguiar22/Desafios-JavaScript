function gerarArrayAleatorio(tamanho, valorMinimo, valorMaximo) {
  if (tamanho <= 0) {
    throw new Error("O tamanho do array deve ser um número positivo.");
  }
  if (valorMinimo > valorMaximo) {
    throw new Error("O valor mínimo não pode ser maior que o valor máximo.");
  }

  const array = [];
  for (let i = 0; i < tamanho; i++) {
    const numeroAleatorio =
      Math.floor(Math.random() * (valorMaximo - valorMinimo + 1)) + valorMinimo;
    array.push(numeroAleatorio);
  }
  return array;
}

// Exemplo de uso
const tamanho = 5;
const valorMinimo = 1;
const valorMaximo = 10;
const arrayAleatorio = gerarArrayAleatorio(tamanho, valorMinimo, valorMaximo);
console.log(arrayAleatorio);
