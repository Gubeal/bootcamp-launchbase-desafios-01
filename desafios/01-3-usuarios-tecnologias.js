const usuarios = [
  { nome: "Carlos", tecnologias: ["HTML", "CSS"]},
  { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"]},
  { nome: "Tuane", tecnologias: ["HTML", "Node.js"]},
]

for (let usuario of usuarios) {
  let grupo = ""
  for(let i = 0; i < usuario.tecnologias.length; i++) {
    if (i > 0) {
      grupo += ", "
    }
    grupo += usuario.tecnologias[i];
  }
  console.log(`${usuario.nome} trabalha com ${grupo}`);
}