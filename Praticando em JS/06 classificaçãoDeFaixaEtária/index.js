/* receba um valor da variavel idade e informe que idade ela pertence diante da tabela de faixa etaria abaixo:

- Criança 0 a 12 anos;
- Adolescente 13 a 17 anos;
- Adulto 18 a 59 anos;
- Idoso 60+ anos;

verificação deve ser feita com if/else

*/

let idade = 19; // variavel idade

function verificarFE(idade) {
  if ((idade >= 0, idade <= 12)) {
    return "Criança";
  }
  if ((idade >= 13, idade <= 17)) {
    return "Adolescente";
  }
  if ((idade >= 18, idade <= 59)) {
    return "Adulto";
  }
  return "Idoso";
}

console.log(verificarFE(idade));
