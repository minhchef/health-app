import useMeals from "~/hooks/useMeals";
import Meal from "./Meal";
import { Pagination } from "../pagination/Pagination";
import FilterIcons from "../menu/FilterIcons";

const Meals = ({ mealData, total }: { mealData: Meal[], total: number }) => {
  const { meals, page, setPage, handleSetFilter, filter, totalPage } = useMeals(mealData, total);

  return (
    <>
      <FilterIcons setFilter={handleSetFilter} currentType={filter} />
      <Meal meals={meals} />
      <Pagination setPage={setPage} page={page} totalPage={totalPage}/>
    </>
  );
};

export default Meals;
