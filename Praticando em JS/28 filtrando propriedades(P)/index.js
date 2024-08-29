function filtrarPropriedades(objeto, propriedades) {
  // Verifica se propriedades é um array
  if (!Array.isArray(propriedades)) {
    throw new Error("O segundo argumento deve ser um array.");
  }

  // Cria um novo objeto contendo apenas as propriedades desejadas
  const resultado = {};

  propriedades.forEach((propriedade) => {
    // Verifica se a propriedade existe no objeto
    if (objeto.hasOwnProperty(propriedade)) {
      resultado[propriedade] = objeto[propriedade];
    } else {
      console.warn(`Propriedade ${propriedade} não encontrada no objeto.`);
    }
  });

  return resultado;
}

// Exemplo de uso
const objeto = {
  nome: "Alice",
  idade: 30,
  cidade: "São Paulo",
  profissao: "Desenvolvedora",
};

const propriedadesDesejadas = ["nome", "idade", "salario"]; // 'salario' não existe no objeto

const resultado = filtrarPropriedades(objeto, propriedadesDesejadas);
console.log(resultado);
// Saída esperada: { nome: 'Alice', idade: 30 }
// Aviso no console: Propriedade "salario" não encontrada no objeto.
