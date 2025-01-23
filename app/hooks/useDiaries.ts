import { useEffect, useState } from "react";
import getDiary from "~/api/diary";

const useDiaries = (initialDiaries: DiaryRecord[]) => {
  const [diaries, setDiaries] = useState<DiaryRecord[]>(initialDiaries);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    (page > 1) && fetch();
  }, [page]);

  const fetch = async () => {
    getDiary(page).then((diary) => {
      if (diary !== null && diary?.diaries) {
        setDiaries((prev) => (page > 1 ? [...prev, ...diary?.diaries] : diary?.diaries));
      }
    });
  };

  return {
    page,
    setPage,
    diaries
  };
};

export default useDiaries;
