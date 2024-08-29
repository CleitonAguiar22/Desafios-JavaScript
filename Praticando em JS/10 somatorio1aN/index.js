const N = 10;
function valor(N) {
  let somatoria = 0;
  let i = 1;
  while (i <= N) {
    somatoria += i;
    i += 1;
  }
  console.log(somatoria);
}

valor(N);
