import { useEffect, useState } from "react";
import getNews from "~/api/news";

const useNews = (initialNews: New[]) => {
  const [news, setNews] = useState<New[]>(initialNews);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    (page > 1) && fetch();
  }, [page]);

  const fetch = async () => {
    const news = await getNews(page);
    if (news && news.news) {
      setNews((prev) => (page > 1 ? [...prev, ...news.news] : news.news));
    }
  };

  return {
    page,
    setPage,
    news
  };
};

export default useNews;
