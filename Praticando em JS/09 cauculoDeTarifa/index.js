/* crie um programa que exibe um valor de uma tarifa dependendo do tipo de usuario 

- menor de 6 anos : gratis, tarifa zero
- estudante 50% desconto
- idoso 30% de desconto
- regular tarifa normal

*/

let tarifa = 2.5;
let tipoUsuario = "Idoso";

function valor_T(tarifa, tipoUsuario) {
  if (tipoUsuario == "Menor de 6 anos") {
    return `A sua tarifa é zero.`;
  }
  if (tipoUsuario == "Estudante") {
    let descontoA = tarifa / 2;
    return `A sua tarifa é ${descontoA}`;
  }
  if (tipoUsuario == "Idoso") {
    let descontoI = tarifa - tarifa * 0.3;
    return `A sua tarifa é ${descontoI}`;
  }
  if (tipoUsuario == "Regular") {
    return `A sua tarifa é ${tarifa}`;
  }
}

console.log(valor_T(tarifa, tipoUsuario));
