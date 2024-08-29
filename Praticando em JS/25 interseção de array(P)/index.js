function encontrarElementosComuns(array1, array2) {
  // Converte o segundo array em um Set para uma busca mais eficiente
  const set2 = new Set(array2);

  // Filtra os elementos do primeiro array que também estão no Set do segundo array
  return array1.filter((elemento) => set2.has(elemento));
}

// Exemplo de uso
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const elementosComuns = encontrarElementosComuns(array1, array2);
console.log(elementosComuns); // Saída: [3, 4, 5]
