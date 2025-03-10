const express = require('express');
const { ObjectId } = require('mongodb');
const router = express.Router();

// GET /recipes - fetch all recipes
router.get('/', async (req, res) => {
  try {
    const recipesCollection = req.app.locals.recipesCollection;
    const recipes = await recipesCollection.find({}).toArray();
    res.json(recipes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch recipes' });
  }
});

// GET /recipes/:id - fetch a recipe by ID
router.get('/:id', async (req, res) => {
  try {
    const recipesCollection = req.app.locals.recipesCollection;
    const recipe = await recipesCollection.findOne({ _id: new ObjectId(req.params.id) });
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    res.json(recipe);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch recipe' });
  }
});

// POST /recipes - create a new recipe
router.post('/', async (req, res) => {
  try {
    const recipesCollection = req.app.locals.recipesCollection;
    const newRecipe = req.body;
    const result = await recipesCollection.insertOne(newRecipe);
    newRecipe._id = result.insertedId;
    res.status(201).json(newRecipe);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create recipe' });
  }
});

// PUT /recipes/:id - update an existing recipe
router.put('/:id', async (req, res) => {
  try {
    const recipesCollection = req.app.locals.recipesCollection;
    const { id } = req.params;
    let updatedRecipe = req.body;

    // Ensure ObjectId is valid before proceeding
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid recipe ID' });
    }

    // Remove _id if it exists in the request body
    delete updatedRecipe._id;

    const result = await recipesCollection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: updatedRecipe },
      { returnDocument: 'after' } // Return updated document
    );

    if (!result.value) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    res.json(result.value);
  } catch (err) {
    console.error('Error updating recipe:', err);
    res.status(500).json({ error: 'Failed to update recipe' });
  }
});

// DELETE /recipes/:id - delete a recipe
router.delete('/:id', async (req, res) => {
  try {
    const recipesCollection = req.app.locals.recipesCollection;
    const result = await recipesCollection.deleteOne({ _id: new ObjectId(req.params.id) });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    res.json({ message: 'Recipe deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete recipe' });
  }
});

module.exports = router;
