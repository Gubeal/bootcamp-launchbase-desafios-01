const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const courses = require('./data');

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  autoescape: false
});

server.get("/", function(req, res){
  const about = {
    image: "data:image/png;base64,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",
    title: "Rocketseat",
    description: "Gerando resultados através do ensino de programação",
    present: 'Principais tecnologias utilizadas na <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>:',
    technologies: [
      { name: "Node" },
      { name: "React" },
      { name: "React Native" },
      { name: "JavaScript" }
    ],
    links: [
      { url: "https://github.com/rocketseat-education", name: "Github" },
      { url: "https://www.instagram.com/rocketseat_oficial/?hl=pt-br", name: "Instagram" },
      { url: "https://pt-br.facebook.com/rocketseat/", name: "Facebook" }
    ]

  }
  return res.render("about", { about });
});

server.get("/contact", function(req, res){
  const contacts = [
    { name: "Comunidade", url: "https://discordapp.com/invite/gCRAFhc" },
    { name: "Email", url: "mailto:oi@rocketseat.com.br" },
    { name: "Telefone", url: "tel:+5547992078767" },
    { name: "Sobre", url: "/" },
  ]
  return res.render("contact", { contacts });
});

server.get("/courses/:id?", function(req, res) {
  const id = req.params.id;
  if ( id ) {
    console.log(id)
    return res.render("course-detail", { slugId: id });
  }
  return res.render("courses", { courses });
}) 

server.use(function(req, res) {
  res.status(404).render("not-found");
})

server.listen(5000, function(){
  console.log("Server is running!...");
});