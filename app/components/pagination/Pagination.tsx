type PaginationProps = {
  page: number;
  setPage: (page: number) => void;
  totalPage: number;
};

export const Pagination = ({ page, setPage, totalPage }: PaginationProps) => {
  if (totalPage === page) return null;

  return (
    <button
      className="mt-5 w-[296px] py-4 bg-gradient-to-r from-primary-300-400-from to-primary-300-400-to text-white font-noto-san rounded mx-auto"
      onClick={() => setPage(page + 1)}
    >
      記録をもっと見る
    </button>
  );
};
