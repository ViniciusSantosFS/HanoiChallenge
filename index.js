const pino1 = [3, 2, 1];
const pino2 = [];
const pino3 = [];
let jogadas = 0;
let total = pino1.length;
// criar um loop e enquanto o pino 3 for menor que 3 continuar rodando
// se o valor do pino 2 for maior que o valor final do pino 1, ele aceita
// se não, o pino 3 recebe o valor
while (pino3.length < total) {
  if (
    pino1[0] !== undefined &&
    pino3[0] !== undefined &&
    pino2[0] !== undefined &&
    pino3[pino3.length - 1] > pino2[pino2.length - 1]
  ) {
    pino3.push(pino2[pino2.length - 1]);
    pino2.pop();
    jogadas++;
  } else {
    if (pino3[0] === undefined) {
      pino3.push(pino1[pino1.length - 1]);
      pino1.pop();
      jogadas++;
    } else if (
      pino1[0] !== undefined &&
      pino3[pino3.length - 1] > pino1[pino1.length - 1]
    ) {
      pino3.push(pino1[pino1.length - 1]);
      pino1.pop();
      jogadas++;
    } else if (pino2[0] === undefined) {
      pino2.push(pino1[pino1.length - 1]);
      pino1.pop();
      jogadas++;
    } else if (
      pino1[0] !== undefined &&
      pino2[pino2.length - 1] > pino1[pino1.length - 1]
    ) {
      pino2.push(pino1[pino1.length - 1]);
      pino1.pop();
      jogadas++;
    } else if (pino2[pino2.length - 1] > pino3[pino3.length - 1]) {
      pino2.push(pino3[pino3.length - 1]);
      pino3.pop();
      jogadas++;
    } else if (pino1[0] === undefined) {
      pino1.push(pino2[pino2.length - 1]);
      pino2.pop();
      jogadas++;
    }
  }
}

console.log(`PINO: ${pino3} Número minimo de jogadas: ${jogadas}`);
