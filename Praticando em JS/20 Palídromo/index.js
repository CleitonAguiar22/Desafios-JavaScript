let palavra = "casa".toLowerCase();
function identificar(palavra) {
  let str = palavra;
  strArr = str.split("");
  inverStr = strArr.reverse();
  arrStr = strArr.join("").toLowerCase();
  if (arrStr == palavra) {
    console.log("Sua palavra é um Polídromo");
  } else {
    console.log("Sua palavra não é um Polídromo");
  }
}
identificar(palavra);
