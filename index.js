let jogadas = 0;

const move = (origem, destino) => {
  console.log(`mova de ${origem} -> ${destino}`);
};

const hanoi = (n, origem, destino, aux) => {
  jogadas++;
  if (n == 1) {
    move(origem, destino);
    return;
  } else {
    hanoi(n - 1, origem, aux, destino);
    move(origem, destino);
    hanoi(n - 1, aux, destino, origem);
  }
};

hanoi(3, "A", "B", "C");
console.log("JOGADAS: " + jogadas);
