
import './App.css';
import React, { useState } from 'react';
import RecipeForm from './components/RecipeForm';
import RecipeDisplay from './components/RecipeDisplay';

export default function App() {
  const [ingredient, setIngredient] = useState('');
  const [recipes, setRecipes] = useState([]); // Initialize recipes as an empty array

  const fetchRecipe = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setRecipes(data.meals || []); // Update the recipes state with the fetched data or an empty array if data.meals is undefined
      // adding new stuff
      // storing the id
    
      
    } catch (error) {
      console.error('Error fetching recipes:', error);
      // Handle the error here, such as displaying an error message to the user
    }
  };

  return (
    <div className="App">
      <h1>Mood Food</h1>
      <RecipeForm
        ingredient={ingredient}
        setIngredient={setIngredient}
        fetchRecipe={fetchRecipe}
        recipes={recipes}
      />
      {recipes.length > 0 && <RecipeDisplay recipes={recipes}/>}
    </div>
  );
}


  
  // useEffect(() => {
  //   fetch(`${process.env.RECIPIE_URL}?ingridients=${ingridient}&apiKey=${process.env.RECIPIE_API_KEY}`)
 

//   const handleKeyDown = event => {
//     if (event.key === 'Enter') {
//       event.preventDefault()
//       console.log(ingridient)
//     }
//   }

//   return (
//     <div className='UserInput'>
//       <input 
//         type = "text"
//         id="ingridient"
//         name="ingridient"
//         placeholder='Mood Ingridient...'
//         value={ingridient}
//         onChange={event => setIngridient(event.target.value)}
//         onKeyDown={handleKeyDown}
//       />
//     </div>
//   )
// }


