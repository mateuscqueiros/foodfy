const express = require('express')
const nunjucks = require('nunjucks')
const recipes = require("./data")

const server = express()

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {

    return res.render("index", {items: recipes})
})

server.get("/sobre", function(req, res) {
    return res.render("about")
})

server.get("/receitas", function(req, res) {

    return res.render("recipes", {recipe: recipes})
})

server.get("/receitas/:index", function (req, res) {

    const recipeIndex = req.params.index;
  
    res.render("detail", { recipe: recipes[recipeIndex - 1] })
  })

server.listen(5002, function() {
    return "server running"
})