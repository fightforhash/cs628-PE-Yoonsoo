import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '.././index.css';
function AddRecipe() {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const navigate = useNavigate(); // Hook to navigate to different pages

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = { name, ingredients, instructions };

    // Send a POST request to add the recipe to the database
    fetch('https://f4c59nb7-5050.usw2.devtunnels.ms/recipes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRecipe)
    })
      .then((res) => res.json())
      .then(() => {
        alert('Recipe added successfully!');
        navigate('https://f4c59nb7-5050.usw2.devtunnels.ms/recipes');
      })
      .catch((error) => console.error('Error adding recipe:', error)); // Handle errors
  };

  return (
    <div>
      <h2>Add Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Recipe Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Ingredients:</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label>Instructions:</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}

export default AddRecipe;
