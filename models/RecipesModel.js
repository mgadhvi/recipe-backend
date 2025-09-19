const recipeArray = require("recipes.json");

class RecipeModel {
    constructor(recipes) {
        this.name = recipe.name;
        this.servings = recipe.servings;
        this.ingredients = recipe.ingredients;
        this.steps = recipe.steps;
    }

    static showAllFruits() {
        return recipesArray.map(e => new RecipeModel(e));
    }

module.exports = RecipeModel;
