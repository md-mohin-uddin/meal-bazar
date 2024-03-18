import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Meal from "../Meal/Meal";

function Meals() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data.meals);
        const meals = data.meals;
        setMeals(meals);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div>
      <h1 className="text-4xl">Meals Items: {meals.length}</h1>
      <div className="grid grid-cols-4 gap-4 ">
        {meals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal}></Meal>
        ))}
      </div>
    </div>
  );
}

export default Meals;
