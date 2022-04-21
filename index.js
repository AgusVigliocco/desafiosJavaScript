let max = 50;
let min = 1;
let c = max + 1;

function primoCompuesto(dividendo, divisor, residuo) {
  if (dividendo % divisor == residuo) {
    return true;
  } else {
    return false;
  }
}

function encontrarPrimos(numero) {
  for (let i = 2; i < numero; i++) {
    if (primoCompuesto(numero, i, 0)) {
      console.log(numero + " es número compuesto");
      return false;
    }
  }
  return numero !== 1;
}

for (; min < c; min++) {
  if (encontrarPrimos(min)) {
    console.log(min + " es número primo");
  }
}
