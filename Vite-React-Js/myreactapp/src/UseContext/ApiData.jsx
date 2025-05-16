import React, { useContext } from "react";
import { RecipeContext } from "./ContextApi";

function ApiData() {
  const recipes = useContext(RecipeContext);

  return (
    <div>
      {recipes && recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div key={recipe.id}>
            <img src={recipe.image} alt={recipe.name} width="150" />
            <h3>{recipe.name}</h3>
          </div>
        ))
      ) : (
        <h2>Loading..</h2>
      )}
    </div>
  );
}

export default ApiData;
