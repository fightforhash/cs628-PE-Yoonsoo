import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '.././index.css';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => { // Fetch the recipe
    fetch('https://f4c59nb7-5050.usw2.devtunnels.ms/recipes')
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error('Error fetching recipes:', error));
  }, []);

  return (
    <div className="recipe-list-container">
      {/* Recipe List on the Left */}
      <div className="recipe-list">
        <h2>Recipes</h2>
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe._id}>
              <Link to={`/recipes/${recipe._id}`}>{recipe.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recipe Details on the Right */}
      <div className="recipe-details">
        <Outlet /> {/* Renders RecipeDetails.js when a recipe is clicked */}
      </div>
    </div>
  );
}

export default RecipeList;