const fs = require('fs')
const data = require("./data.json")

exports.index = function(req, res) {

    return res.render("admin/list", { items: data.recipes })
}

exports.show = function(req, res) {

    const id = req.params.index

    return res.render("detail",  { recipe: data.recipes[id - 1] } )
}

exports.create = function(req, res) {

    return res.render("admin/create")
}

exports.post = function(req, res) {

    const keys = Object.keys(req.body)

    // for(key of keys) {
    //     if (req.body[key] == "" ) {
    //         return res.send("Please, fill all fields");
    //     }
    // }

    let { image, title, author, ingredients, preparation, information } = req.body

    const created_at = Date.now()
    const id = Number(data.recipes.length + 1)

    data.recipes.push({
        image,
        title,
        author,
        id,
        ingredients,
        preparation,
        information,
        created_at
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Write file error")

        return res.redirect('/receitas/list')
    })
}

exports.edit = function(req, res) {
    const { id } = req.params

    const recipe = data.recipes.find(function(instructor) {
        return instructor.id == id
    })

    if (!recipe) return res.send("Receita não encontrada")

    return res.render('admin/edit', { recipe })
    
}

exports.put = function(req, res) {
    const { id } = req.body
    let index = 0

    const foundRecipe = data.recipes.find(function(recipe, foundIndex) {

        if (id == recipe.id) {
            index = foundIndex
            return true
        }
    })

    if (!foundRecipe) return res.send("Receita não encontrada")

    const recipe = {
        ...foundRecipe,
        ...req.body
    }

    data.recipes[index] = recipe

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if(err) return res.send("Write error!")

        return res.redirect(`/admin/receitas/list/${id}`)
    })
    
}