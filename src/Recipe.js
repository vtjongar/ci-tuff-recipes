import React from "react";
import style from "./recipe.module.css";
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <div className={style.title}>{title}</div>

      <div className={style.list}>
        <ol>
          {ingredients.map(ingredient => (
            <li>{ingredient.text}</li>
          ))}
        </ol>
      </div>

      <div className={style.calories} ><h2>Calories</h2> {calories}</div>
  
        <img className={style.image} src={image} alt="" />
    
    </div>
  );
};

export default Recipe;
