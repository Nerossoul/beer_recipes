import { useAxios } from "@/config/useAxios";

export const useGetRecipe = (recipeId) => {
  const [{ data, loading, error }] = useAxios(
    {
      url: `/recipes/${recipeId === "random" ? "*" : recipeId}`,
      method: "GET",
    },
    { manual: false, useCache: false }
  );

  return { data, loading, error };
};
