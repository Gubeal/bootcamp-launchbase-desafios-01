const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

const REGRA_CONTRIBUICAO_FEMININO = 85;
const REGRA_CONTRIBUICAO_MASCULINO = 95;
const TEMPO_MINIMO_FEMININO = 30;
const TEMPO_MINIMO_MASCULINO = 35;

if (sexo == "F") {
  if (contribuicao >= TEMPO_MINIMO_FEMININO) {
    const TEMPO_CONTRIBUICAO = contribuicao + idade;
    if (TEMPO_CONTRIBUICAO >= REGRA_CONTRIBUICAO_FEMININO) {
      console.log(`${nome}, você pode se aposentar!`)
    } else {
      console.log(`${nome}, você não pode se aposentar!`)
    }
  } else {
    console.log(`${nome}, você não pode se aposentar!`)
  }
}

if (sexo == "M") {
  if (contribuicao >= TEMPO_MINIMO_MASCULINO) {
    const TEMPO_CONTRIBUICAO = contribuicao + idade;
    if (TEMPO_CONTRIBUICAO >= REGRA_CONTRIBUICAO_MASCULINO) {
      console.log(`${nome}, você pode se aposentar!`)
    } else {
      console.log(`${nome}, você não pode se aposentar!`)
    }
  } else {
    console.log(`${nome}, você não pode se aposentar!`)
  }
}
