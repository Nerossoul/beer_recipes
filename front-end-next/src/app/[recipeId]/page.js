"use client";

import { useGetRecipe } from "@/api/recipes/useGetRecipe";
import Link from "next/link";

export default function RecipePage({ params }) {
  const { data: recipe, loading, error } = useGetRecipe(params.recipeId);
  console.log(recipe);

  if (loading) {
    return "Loading...";
  }

  if (error) {
    return "Error get recipe";
  }

  if (!recipe?.[0]) {
    return "Waiting data loading";
  }

  return (
    <main>
      <Link href={"/"}>Back</Link>

      <h1>{recipe?.[0].name}</h1>
      <h3>description</h3>
      <div>{recipe?.[0].description}</div>
      <div>abv: {recipe?.[0].abv}</div>
      <div>ebc: {recipe?.[0].ebc}</div>
      <div>ibu: {recipe?.[0].ibu}</div>
      <div>By : {recipe?.[0].contributed_by}</div>
    </main>
  );
}
