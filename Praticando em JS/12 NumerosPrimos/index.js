const N = 20;

function mostrarNP(n) {
  let i = 1;
  while (i <= n) {
    if (caucularPrimo(i)) {
      console.log(i);
    }
    i++;
  }
}

function caucularPrimo(n) {
  if (n <= 1) {
    return false;
  }
  if (n == 2) {
    return true;
  }
  let i = 1;
  let divisores = 0;
  while (i <= n) {
    if (n % i == 0) {
      divisores++;
    }
    i++;
  }
  return divisores == 2;
}

mostrarNP(N);
