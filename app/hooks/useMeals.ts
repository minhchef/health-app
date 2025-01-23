import { useEffect, useState } from "react";
import getMeals from "~/api/meals";

const useMeals = (initialMeals: Meal[], total: number) => {
  const [meals, setMeals] = useState<Meal[]>(initialMeals);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(total);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    (page > 1 || filter) && fetch();
  }, [page, filter]);

  const fetch = async () => {
    getMeals(page, filter).then((meal) => {
      if (meal !== null && meal.meals) {
        setMeals((prev) => (page > 1 ? [...prev, ...meal.meals] : meal.meals));
        setTotalPage(meal.totalPages)
      }
    });
  };

  const handleSetFilter = (filterData: string) => {
    setPage(1);
    setFilter(filterData === filter ? "all" : filterData);
  };

  return {
    meals,
    page,
    setPage,
    handleSetFilter,
    filter,
    totalPage
  };
};

export default useMeals;
