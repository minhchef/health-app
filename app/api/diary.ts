const getDiary = async (page: number = 1,): Promise<{diaries: DiaryRecord[]} | null> => {
  try {
    const response = await fetch(`/diaries?page=${page}`);
    const data = await response?.json();

    return data;
  } catch (err) {
    console.error(err);
  }

  return null;
};

export default getDiary;
