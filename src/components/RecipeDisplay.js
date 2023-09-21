import React from "react";
import "./RecipeDisplay.css";

export default function RecipeDisplay({recipes}) {
    return (
        <div className="Display">
            <h2 className="recipeHeader">Recipe's</h2>
            
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe.idMeal}>
                        <h3 className="recipeName">{recipe.strMeal}</h3>
                        <img className="foodImage"src={recipe.strMealThumb} alt={recipe.strMeal} />
                    </li>
                ))}
            </ul>
        </div>
    )
}