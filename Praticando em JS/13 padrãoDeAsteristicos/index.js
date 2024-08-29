const N = 4;

function criarA(N) {
  let i = 1;
  let asteric = "*";
  while (i <= N) {
    console.log(asteric);
    asteric = asteric + " *";
    i++;
  }
}

criarA(N);
