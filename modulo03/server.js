const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.use(express.static('public'))

server.set("view engine", "html");

nunjucks.configure("views", {
  express: server
})

server.get("/", function(request, response) {
  return response.render("about");
});

server.get("/portfolio", function (request, response) {
  return response.render("portfolio");
})

server.listen(5000, function() {
  console.log("server is runing");
});