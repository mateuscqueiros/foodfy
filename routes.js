const express = require('express')
const routes = express.Router()
const data = require("./data.json")
const recipes = require("./recipes")

//GET

routes.get("/", function(req, res) {
    return res.render("index", {items: data.recipes})
})

routes.get("/sobre", function(req, res) {
    return res.render("about")
})

routes.get("/receitas", function(req, res) {
    return res.render("recipes", {recipe: data.recipes})
})

routes.get("/receitas/:index", function (req, res) {

    const recipeIndex = req.params.index;
  
    res.render("detail", { recipe: data.recipes[recipeIndex - 1], id: recipeIndex - 1 })
})

routes.get("/admin/receitas/list", recipes.index)

routes.get("/admin/receitas/list/:index", recipes.show)

routes.get("/admin/receitas/create", recipes.create)

//POST

routes.post("/admin/receitas", recipes.post)


//PUT


//EDIT

routes.get("/admin/receitas/:id/edit", recipes.edit)

module.exports = routes