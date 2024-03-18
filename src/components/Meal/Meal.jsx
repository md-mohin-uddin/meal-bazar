import React, { useState } from "react";
import MealsDetails from "../MealsDetails/MealsDetails";

function Meal({ meal }) {
  const [meals, setMeals] = useState([]);
  const handleClick = () => {
    setMeals(meals);
  };
  return (
    <div className="text-center border border-gray-800 p-3 rounded-md">
      <h2 className="text-2xl text-center text-green-800 ">
        Meal Name: {meal.strMeal}
      </h2>
      <p>Area: {meal.strArea}</p>
      <div className="flex items-center justify-center">
        {" "}
        <img className="w-auto py-2" src={meal.strMealThumb} alt="" />
      </div>
      <p>Category: {meal.strCategory}</p>
      {/* <NavLink
        meal={meal}
        onClick={handleClick}
        className="py-2 px-5 my-2 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 "
      >
        Details
      </NavLink> */}
      {/* {mealsDetails && <MealsDetails meal={meal}></MealsDetails>} */}

      <MealsDetails meal={meal}></MealsDetails>
    </div>
  );
}

export default Meal;
