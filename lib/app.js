const express = require('express');
const app = express();
const Recipe = require('./models/Recipe');

app.use(express.json());

//create a recipe
app.post('/api/v1/recipes', (req, res) => {
  Recipe
    .create(req.body)
    .then(recipe => res.send(recipe));
});

//find recipe
app.get('/api/v1/recipes', (req, res) => {
  Recipe
    .find()
    .select({ name: true })
    .then(recipes => res.send(recipes));
});

//find recipe by id
app.get('/api/v1/recipes/:id', (req, res) => {
  Recipe
    .findById(req.params.id)
    .then(recipe => res.send(recipe));
});

//patch recipe by id
app.patch('/api/v1/recipes/:id', (req, res) => {
  Recipe
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(recipe => res.send(recipe));
});

//delete recipe by id
app.delete('/api/v1/recipes/:id', (req, res) => {
  Recipe
    .findByIdAndDelete(req.params.id)
    .then(recipe => res.send(recipe));
});

module.exports = app;
