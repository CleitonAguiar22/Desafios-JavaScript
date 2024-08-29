function combinarObjetos(objeto1, objeto2) {
  const resultado = { ...objeto1 }; // Cria uma cópia de objeto1

  for (const [chave, valor] of Object.entries(objeto2)) {
    if (resultado.hasOwnProperty(chave)) {
      // Se a chave já existe, combine os valores em um array
      if (Array.isArray(resultado[chave])) {
        resultado[chave].push(valor);
      } else {
        resultado[chave] = [resultado[chave], valor];
      }
    } else {
      // Se a chave não existe, adicione-a normalmente
      resultado[chave] = valor;
    }
  }

  return resultado;
}

// Exemplo de uso
const objeto1 = {
  nome: "Alice",
  idade: 30,
  cidade: "São Paulo",
};

const objeto2 = {
  idade: 31,
  profissao: "Desenvolvedora",
  cidade: "Rio de Janeiro",
};

const resultado = combinarObjetos(objeto1, objeto2);
console.log(resultado);
// Saída esperada:
// {
//     nome: 'Alice',
//     idade: [30, 31],
//     cidade: ['São Paulo', 'Rio de Janeiro'],
//     profissao: 'Desenvolvedora'
// }
