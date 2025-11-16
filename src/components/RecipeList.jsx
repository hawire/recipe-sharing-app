import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipe List</h2>

      {recipes.length === 0 && <p>No recipes yet.</p>}

      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ddd', margin: '10px 0', padding: '10px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
