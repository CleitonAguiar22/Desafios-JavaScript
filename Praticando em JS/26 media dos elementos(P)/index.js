function calcularMedia(array) {
  if (array.length === 0) {
    throw new Error("O array não pode estar vazio.");
  }

  // Soma todos os elementos do array
  const soma = array.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual,
    0
  );

  // Calcula a média
  const media = soma / array.length;

  return media;
}

// Exemplo de uso
const numeros = [10, 7, 2];
const media = calcularMedia(numeros);
console.log(media); // Saída: 30
