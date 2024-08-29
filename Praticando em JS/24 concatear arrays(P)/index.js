function unirArrays(array1, array2) {
  // Usa o método concat para unir os dois arrays
  return array1.concat(array2);

  // Alternativamente, você pode usar o operador de espalhamento:
  // return [...array1, ...array2];
}

// Exemplo de uso
const array1 = [0, 1, 2];
const array2 = [1, 2, 3];
const arrayUnido = unirArrays(array1, array2);
console.log(arrayUnido); // Saída: [0, 1, 2, 1, 2, 3]
