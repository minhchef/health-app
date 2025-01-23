import { Pagination } from "../pagination/Pagination";
import useNews from "~/hooks/useNews";
import New from "./New";

const News = ({ inittialNews }: { inittialNews: New[] }) => {
  const { news, page, setPage } = useNews(inittialNews);

  return (
    <>
      <div className="w-[960px] mx-auto mt-10">
        <div className="grid grid-cols-4 gap-4 mt-2">
          {news.map((data, index) => (
            <New {...data} key={index} />
          ))}
        </div>
      </div>
      <Pagination page={page} setPage={setPage} totalPage={10} />
    </>
  );
};

export default News;
