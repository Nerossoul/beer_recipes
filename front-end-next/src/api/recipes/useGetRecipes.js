import { useAxios } from "@/config/useAxios";

export const useGetRecipes = () => {
  const [{ data, loading, error }, fetchRecipes] = useAxios(
    {
      method: "GET",
    },
    { manual: true, useCache: false }
  );

  const getRecipes = (page = 1) => {
    fetchRecipes({
      url: `/recipes?page=${page}`,
    });
  };

  return { data, loading, error, getRecipes };
};
