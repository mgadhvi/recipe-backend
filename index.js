const express = require('express')
const recipes = require('./models/recipes.json')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
   res.send('Recipes API')
})

app.get('/recipes', (req, res) => {
   res.send(recipes)
})

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})

app.get("/recipes/:name", (req, res) => {
    const name = req.params.name.toLowerCase();
    const recipe = recipes.find((recipe) => recipe.name.toLowerCase() == name);
    if (recipe == undefined) {
        res.status(404).send("The recipe doesn't exist.");
    } else {
        res.status(200).send(recipe);
    }
});
