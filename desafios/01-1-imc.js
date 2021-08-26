const nome = "Carlos";
const peso = 84;
const altura = 1.88;

const IMC = peso / (altura * altura);

if (IMC >= 30) {
  console.log(`${nome} você está acima do peso`);
} else {
  if (IMC < 29.9) {
    console.log(`${nome} você não está acima do peso`);
  }
}