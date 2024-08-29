// receba dois valores (x e y) e informe se x é divisivel por y(a divisão dá resto zero)

let x = 10; // variavel x
let y = 2; // variavel y

function verificar(x, y) {
  if (x % y == 0) {
    console.log(
      `${x} é divisivel por ${y}, pois o resto da divisão é igual a: ${0}`
    );
  } else {
    console.log(
      `${x}  não é divisivel por ${y}, pois o resto da divisão não é igual a: ${0}`
    );
  }
} // função que verifica se x é divisivel por y;

verificar(x, y); // chamada da função verificar(x, y)
