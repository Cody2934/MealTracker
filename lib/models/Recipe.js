const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  directions: [String]
});

const ingredients = new mongoose.Schema([
    name: {
      type: String,
      required: true
    },
    amount: {
      type: String
      required: true
    },
    measurement: {
      type: String,
      required: true,
      enum: ['teaspoon', 'tablespoon', 'cup', 'ounce', 'grams']
    }
  ]);

module.exports = mongoose.model('Recipe', schema, ingredients);
