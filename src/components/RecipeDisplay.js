import React, { useState } from "react";
import "./RecipeDisplay.css";


export default function RecipeDisplay({recipes}) {
    const [detailedRecipe, setDetailedRecipe] = useState(null);// Initialize recipes as an empty array

    // Fetch recipes from the API
    const fetchDetailedRecipe = async (id)=>{
        try {
          const response= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data= await response.json()
          // set detailed recipe in the state
          setDetailedRecipe(data.meals[0])
        } catch (error) {
          console.error('Error fetching recipes:', error);
          // Handle the error here, such as displaying an error message to the user
        }
      }
    return (
        <div className="Display">
            <h2 className="recipeHeader">Recipe's</h2>
            
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe.idMeal}>
                        <h3 className="recipeName">{recipe.strMeal}</h3>
                        <img className="foodImage"src={recipe.strMealThumb} alt={recipe.strMeal} />
                        <button onClick = {()=>fetchDetailedRecipe(recipe.idMeal)}> View Recipe</button>
                        {detailedRecipe && detailedRecipe.idMeal === recipe.idMeal &&(
                            <div className= "detailedRecipe">
                                <h4>{detailedRecipe.strMeal}</h4>
                                <p>{detailedRecipe.strInstructions}</p>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            

        </div>
    )
}