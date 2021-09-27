const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require('./data');

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
});

server.get("/", function(request, response) {
  const about = {
    avatar_url : "https://avatars3.githubusercontent.com/u/6643122?s=460&v=4",
    name : "Mayk Brito",
    role : "Instrutor - Rocketseat",
    description: 'Programador full-stack, focado em trazer o melhor ensino para iniciantes em programação. Colaborador da <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>',
    links: [
      { name: "Github", url: "https://github.com/maykbrito/" },
      { name: "Twitter", url: "https://twitter.com/maykbrito/" },
      { name: "Linkedin", url: "https://www.linkedin.com/in/maykbrito/" },
    ]

  }
  return response.render("about", { about });
});

server.get("/portfolio", function (request, response) {
  return response.render("portfolio", { items: videos });
});

server.get("/video", function(req, res) {
  const id = req.query.id;

  const video = videos.find(function(video){
    return video.id == id;
  })

  if (!video) {
    return res.send("Video not found!")
  }

  return res.render("video", { item: video });
});

server.listen(5000, function() {
  console.log("server is runing");
});