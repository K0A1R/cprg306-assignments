"use client";
import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadMealIdeas() {
    const data = await fetchMealIdeas(ingredient);
    setMeals(data);
    setLoading(false);
  }
  useEffect(() => {
    setLoading(true);
    loadMealIdeas();
  }, [ingredient]);

  if (!ingredient) {
    return (
      <div className="ml-20 p-4 bg-slate-300 h-fit rounded-md">
        <h1 className="font-bold text-center text-xl mb-2">Meal Ideas</h1>
        <p>Select an ingredient to see meal ideas!</p>
      </div>
    );
  }

  return (
    <div className="ml-20 p-4 bg-slate-300 h-fit rounded-md">
      <h1 className="font-bold text-center text-xl mb-2">Meal Ideas</h1>
      {loading ? (
        <p className="italic">Loading meal ideas...</p>
      ) : !meals || meals.length === 0 ? (
        <p>No meal ideas found for {ingredient}!</p>
      ) : (
        <ul className="space-y-1">
          {meals.map((meal) => (
            <li
              className="p-2 bg-slate-200 rounded-md shadow-sm hover:shadow-md cursor-pointer transition-shadow"
              key={meal.idMeal}
            >
              {meal.strMeal}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
