import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../index.css'; // Import global styles

function EditRecipe() {
  const { id } = useParams(); 
  const [recipe, setRecipe] = useState({ name: '', ingredients: '', instructions: '' }); 
  const navigate = useNavigate(); 

  // Fetch the recipe details when the component mounts or when the ID changes
  useEffect(() => {
    fetch(`https://f4c59nb7-5050.usw2.devtunnels.ms/recipes/${id}`)
      .then((res) => res.json()) 
      .then((data) => setRecipe(data)) 
      .catch((error) => console.error('Error fetching recipe:', error)); 
  }, [id]);

  // Handle form submission to update the recipe
  const handleSubmit = (e) => {
    e.preventDefault(); 

    fetch(`https://f4c59nb7-5050.usw2.devtunnels.ms/recipes/${id}`, {
      method: 'PUT', // Use PUT method to update the recipe
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify(recipe), 
    })
      .then((res) => res.json()) 
      .then(() => {
        alert('Recipe updated successfully!'); 
        navigate(`/recipes/${id}`); 
      })
      .catch((error) => console.error('Error updating recipe:', error)); // Log any errors
  };

  return (
    <div>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        {/* Input field for the recipe name */}
        <div>
          <label>Recipe Name:</label>
          <input
            type="text"
            value={recipe.name} // Bind input value to state
            onChange={(e) => setRecipe({ ...recipe, name: e.target.value })} 
            required
          />
        </div>

        {/* Textarea for the recipe ingredients */}
        <div>
          <label>Ingredients:</label>
          <textarea
            value={recipe.ingredients} // Bind textarea value to state
            onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value })} 
            required
          ></textarea>
        </div>

        {/* Textarea for the recipe instructions */}
        <div>
          <label>Instructions:</label>
          <textarea
            value={recipe.instructions} // Bind textarea value to state
            onChange={(e) => setRecipe({ ...recipe, instructions: e.target.value })} 
            required
          ></textarea>
        </div>

        {/* Button to submit the form and update the recipe */}
        <button type="submit">Update Recipe</button>
      </form>
    </div>
  );
}

export default EditRecipe;