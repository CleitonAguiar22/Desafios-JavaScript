function encontrarElementoMaisFrequente(array) {
  if (array.length === 0) {
    return null; // Ou qualquer outro valor que você queira retornar quando o array estiver vazio
  }

  const contagem = {};
  let maxElemento = array[0];
  let maxContagem = 0;

  for (const elemento of array) {
    // Atualiza a contagem do elemento atual
    contagem[elemento] = (contagem[elemento] || 0) + 1;

    // Verifica se o elemento atual tem uma contagem maior que o máximo
    if (contagem[elemento] > maxContagem) {
      maxContagem = contagem[elemento];
      maxElemento = elemento;
    }
  }

  return maxElemento;
}

// Exemplo de uso
const array = [3, 5, 3, 7, 2, 5, 3, 5];
const elementoMaisFrequente = encontrarElementoMaisFrequente(array);
console.log(elementoMaisFrequente); // Saída: 3 (ou 5, dependendo do que aparece mais frequentemente)
