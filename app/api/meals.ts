const getMeals = async (page: number = 1, filter: string): Promise<{meals: Meal[], totalPages: number} | null> => {
  try {
    const response = await fetch(`/get-meals?page=${page}&type=${filter}`);
    const data = await response?.json();

    return data;
  } catch (err) {
    console.error(err);
  }

  return null;
};

export default getMeals;