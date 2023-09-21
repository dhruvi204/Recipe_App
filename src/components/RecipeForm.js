import React from 'react';
import './RecipeForm.css';

function RecipeForm({ ingredient, setIngredient, fetchRecipe }) {
  const handleChange = (e) => {
    setIngredient(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRecipe();
  };

  return (
    <div className='userInput'>
      <form onSubmit={handleSubmit}>
      <input
        className="inputForm"
        type="text"
        placeholder="Mood ingredient..."
        value={ingredient}
        onChange={handleChange}
      />
      <button className="inputButton"type="submit">Get Recipe</button>
    </form>
    </div>
    
  );
}

export default RecipeForm;







// import React from "react";

// export default function RecipeForm({ ingridient, setIngridient, fetchRecipe }) {
//   const handleKeyDown = event => {
//     if (event.key === "Enter") {
//       event.preventDefault();
//       fetchRecipe();
//     }
//   };

//   return (
//     <div className="UserInput">
//       <input
//         type="text"
//         id="ingridient"
//         name="ingridient"
//         placeholder="Mood Ingridient..."
//         value={ingridient}
//         onChange={event => setIngridient(event.target.value)}
//         onKeyDown={handleKeyDown}
//       />
//       <button onClick={fetchRecipe}>Search</button>
//     </div>
//   );
// }