import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../index.css'; // Import styles

function RecipeDetail() {
  const { id } = useParams(); // Get the recipe ID from the URL
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null); // State to store recipe data

  // Fetch the recipe details from the backend
  useEffect(() => {
    fetch(`https://f4c59nb7-5050.usw2.devtunnels.ms/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data)) // Store recipe in state
      .catch((error) => console.error('Error fetching recipe:', error));
  }, [id]);

  // Handle deleting the recipe
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      fetch(`https://f4c59nb7-5050.usw2.devtunnels.ms/recipes/${id}`, { method: 'DELETE' })
        .then(() => {
          alert('Recipe deleted successfully!');
          navigate('/recipes'); // Redirect after deleting
        })
        .catch((error) => console.error('Error deleting recipe:', error));
    }
  };

  // Show a loading message if the recipe is still being fetched
  if (!recipe) {
    return <p>Loading recipe...</p>;
  }

  return (
    <div className="recipe-details">
      <h3>{recipe.name || 'No Name'}</h3>
      <p><strong>Ingredients:</strong> {recipe.ingredients || 'No Ingredients'}</p>
      <p><strong>Instructions:</strong> {recipe.instructions || 'No Instructions'}</p>

      <div className="recipe-buttons">
        <button className="edit-btn" onClick={() => navigate(`/edit/${id}`)}>Edit</button>
        <button className="delete-btn" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default RecipeDetail;
