const N = 20;

function mostrarVF(N) {
  let i = 1;
  let valor1 = 0;
  let valor2 = 1;
  while (i <= N) {
    console.log(valor1);
    let valor3 = valor1 + valor2;
    valor1 = valor2;
    valor2 = valor3;
    i++;
  }
}

mostrarVF(N);
