let myArray = [3, 23, 5, 2, 23];
let maxN = myArray[0];

for (let i = 1; i < myArray.length; i++) {
  if (myArray[i] > maxN) {
    maxN = myArray[i];
  }
}


let resultadoElement = document.getElementById("resultado");

resultadoElement.textContent = `El número más grande es: ${maxN}`;
