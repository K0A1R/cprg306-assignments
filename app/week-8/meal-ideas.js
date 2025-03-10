"use client";
import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

async function fetchMealIngredients(mealId) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    const data = await response.json();
    const meal = data.meals[0];
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push(`${measure ? `${measure} of ` : ""}${ingredient}`);
      }
    }
    return ingredients;
  } catch (error) {
    console.error("Error fetching meal ingredients:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ingredients, setIngredients] = useState({});
  const [mealId, setMealId] = useState(null);

  async function loadMealIdeas() {
    const data = await fetchMealIdeas(ingredient);
    setMeals(data);
    setLoading(false);
  }

  async function loadMealIngredients(mealId) {
    const data = await fetchMealIngredients(mealId);
    setIngredients((prevIngredients) => ({
      ...prevIngredients,
      [mealId]: data,
    }));
  }

  useEffect(() => {
    setLoading(true);
    loadMealIdeas();
  }, [ingredient]);

  useEffect(() => {
    if (meals.length > 0) {
      setLoading(true);
      meals.forEach((meal) => {
        if (!ingredients[meal.idMeal]) {
          loadMealIngredients(meal.idMeal);
        }
      });
      setLoading(false);
    }
  }, [meals]);

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
      <h1 className="font-bold text-center text-xl mb-2 capitalize">
        Meal Ideas for {ingredient}
      </h1>
      {loading ? (
        <p className="italic">Loading meal ideas...</p>
      ) : meals.length === 0 ? (
        <p>No meal ideas found for {ingredient}!</p>
      ) : (
        <ul className="space-y-1">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="p-2 bg-slate-200 rounded-md shadow-sm hover:shadow-md cursor-pointer transition-shadow"
              onClick={() => setMealId(meal.idMeal)}
            >
              <div className="font-bold">{meal.strMeal}</div>
              {mealId === meal.idMeal && ingredients[meal.idMeal] && (
                <div>
                  <h2 className="font-semibold">Ingredients: </h2>
                  <ul className="list-decimal ml-5">
                    {ingredients[meal.idMeal].map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
