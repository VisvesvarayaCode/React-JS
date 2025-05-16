import React, { createContext, useEffect, useState } from "react";

export const RecipeContext = createContext();

const ContextApi = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json()) // ✅ Return parsed JSON
      .then((data) => {
        console.log(data); // Optional: for debugging
        setRecipes(data.recipes); // ✅ Correctly set recipes
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error); // Optional: error handling
      });
  }, []);

  return (
    <RecipeContext.Provider value={recipes}>
      {children}
    </RecipeContext.Provider>
  );
};

export default ContextApi;
