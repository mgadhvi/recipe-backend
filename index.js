const express = require('express')
const recipes = require('./models/recipes.json')
const app = express()
const port = 3000

app.get('/', (req, res) => {
   res.send('Hello World!')
})

app.get('/recipes', (req, res) => {
   res.send(recipes)
})

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})
