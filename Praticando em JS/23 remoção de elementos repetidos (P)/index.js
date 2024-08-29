function removerDuplicados(array) {
  // Usa um Set para armazenar valores únicos e converte de volta para um array
  return [...new Set(array)];
}

// Exemplo de uso
const arrayComDuplicados = [1, 2, 2, 3, 4, 4, 5];
const arraySemDuplicados = removerDuplicados(arrayComDuplicados);
console.log(arraySemDuplicados); // Saída: [1, 2, 3, 4, 5]
