import React, { useState } from 'react';
import './RecipeForm.css';

function RecipeForm({ ingredient, setIngredient, fetchRecipe }) {
  const [submitted, setSubmitted] = useState(false)
  const handleChange = (e) => {
    setIngredient(e.target.value);
    if (submitted){
      setSubmitted(false)
    }
    
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setSubmitted(true)
    await fetchRecipe();
    setIngredient('')
    setSubmitted(false)
    
  };

  return (
    <div className='userInput'>
      <form onSubmit={handleSubmit}>
      <input
        className="inputForm"
        type="text"
        placeholder={submitted ? '' : "Mood ingredient..."}
        value={ingredient}
        onChange={handleChange}
      />
      <button className="GoButton"type="submit">Go !</button>
    </form>
    </div>
    
  );
}

export default RecipeForm;
