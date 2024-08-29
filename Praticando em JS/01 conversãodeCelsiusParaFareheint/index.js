let temp = 0;
let escala = "f";

function calcularTemp(escala, temp) {
  let resultado = null;
  if (escala == "c" || escala == "C") {
    resultado = temp * (9 / 5) + 32;
    return `${resultado} °F`;
  }
  if (escala == "f" || escala == "F") {
    resultado = (temp - 32) * (5 / 9);
    return `${resultado} °C`;
  }
}

console.log(calcularTemp(escala, temp));
