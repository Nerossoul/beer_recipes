"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { useGetRecipes } from "@/api/recipes/useGetRecipes";

import styles from "./page.module.css";

export default function Home() {
  const { data: recipes, loading, error, getRecipes } = useGetRecipes();

  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!page) {
      return;
    }

    getRecipes(page);
  }, [page]);

  if (loading) {
    return "Loading";
  }

  if (error) {
    return "error";
  }

  return (
    <main className={styles.main}>
      <Link href={"/random"}>Go to Random</Link>
      <div>
        {" "}
        <button
          onClick={() => setPage((currentPage) => currentPage - 1)}
          disabled={page === 1}
        >
          Prev
        </button>
        Page: {page}
        <button onClick={() => setPage((currentPage) => currentPage + 1)}>
          Next
        </button>{" "}
      </div>
      {recipes?.map((recipe) => (
        <div>
          <Link href={`/${recipe.id}`}>{recipe.name}</Link>
        </div>
      ))}
    </main>
  );
}
