"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const fetchMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const loadMealIdeas = async () => {
    const data = await fetchMealIdeas(ingredient);
    setMeals(data.meals);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <section className="ml-32 w-96">
      <h1 className="text-white font-bold text-center">Meal Ideas</h1>
      <div className="bg-slate-900 p-7 h-fit rounded-lg">
        {meals === null ? (
          <p className="text-white text-center">
            No meal ideas found for {ingredient}!
          </p>
        ) : (
          meals.map((meal) => (
            <p className="text-white" key={meal.idMeal}>
              {meal.strMeal}
            </p>
          ))
        )}
      </div>
    </section>
  );
}
