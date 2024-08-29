function contarVogais(str) {
  const palavra = str.split("");
  const vogais = ["a", "e", "i", "o", "u"];
  const quantidadeElementos = palavra.filter((x) => vogais.includes(x)).length;
  return "Sua palavra possui " + quantidadeElementos + " vogais";
}
console.log(contarVogais("nss"));
