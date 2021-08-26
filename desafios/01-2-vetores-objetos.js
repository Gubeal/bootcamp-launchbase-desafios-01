const programador = {
  nome: "Celso",
  idade: "36",
  tecnologias: [
    { 
      nome: "COBOL",
      especialidade: "Mainframe"
    },
    { 
      nome: "Java",
      especialidade: "Backend/Mobile"
    },
    { 
      nome: "Natural",
      especialidade: "Emulador3270"
    },
    { 
      nome: "JavaScript",
      especialidade: "Web/Mobile"
    },

  ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)