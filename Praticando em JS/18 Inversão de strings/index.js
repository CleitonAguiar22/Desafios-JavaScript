function inversão(string) {
  let stringArray = string.split("");
  let revertArray = stringArray.reverse();
  let arrayString = revertArray.join("");
  console.log(arrayString);
}
inversão("Enaile");
