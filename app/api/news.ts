const getNews = async (page: number = 1,): Promise<{news: New[]} | null> => {
  try {
    const response = await fetch(`/get-news?page=${page}`);
    const data = await response?.json();

    return data;
  } catch (err) {
    console.error(err);
  }

  return null;
};

export default getNews;
