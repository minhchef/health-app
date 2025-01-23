import meals from "~/data/meals";
import { LoaderFunction } from "@remix-run/node";

type Meal = {
  img: string;
  type: string;
  desc: string;
};

type PaginationResult = {
  paginatedMeals: Meal[];
  totalPages: number;
  currentPage: number;
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const type = url.searchParams.get("type") || "all";
  const page = parseInt(url.searchParams.get("page") || "1", 10);
  const recordsPerPage = 8;

  const filteredMeals = filterMealsByType(meals, type);
  const { paginatedMeals, totalPages, currentPage } = paginateMeals(
    filteredMeals,
    page,
    recordsPerPage
  );

  return createJsonResponse({ meals: paginatedMeals, totalPages, currentPage });
};

const filterMealsByType = (meals: Meal[], type: string): Meal[] => {
  return type === "all" ? meals : meals.filter((meal) => meal.type === type);
};

const paginateMeals = (
  meals: Meal[],
  page: number,
  recordsPerPage: number
): PaginationResult => {
  const totalRecords = meals.length;
  const totalPages = Math.ceil(totalRecords / recordsPerPage);
  const currentPage = Math.min(Math.max(page, 1), totalPages);
  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;

  return {
    paginatedMeals: meals.slice(startIndex, endIndex),
    totalPages,
    currentPage,
  };
};

const createJsonResponse = (data: object): Response => {
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
};
