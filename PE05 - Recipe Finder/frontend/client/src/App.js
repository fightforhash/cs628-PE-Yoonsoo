import React from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetails';
import AddRecipe from './components/AddRecipe';
import EditRecipe from './components/EditRecipe';
import './index.css'; //Import global styles

function App() {
  // Return everything
  return (
    <div>
      <h1>Recipe Finder</h1>
      <nav>
        <Link to="/recipes">Recipes</Link> |  
        <Link to="/add" style={{ marginLeft: '10px' }}>Add Recipe</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/recipes" />} />

        {/* Make RecipeDetails a nested route under RecipeList */}
        <Route path="/recipes" element={<RecipeList />}>
          <Route path=":id" element={<RecipeDetail />} />
        </Route>

        <Route path="/add" element={<AddRecipe />} />
        <Route path="/edit/:id" element={<EditRecipe />} />
      </Routes>
    </div>
  );
}

export default App;
