import useDiaries from "~/hooks/useDiaries";
import DiaryRecord from "../diary/DiaryRecord";
import { Pagination } from "../pagination/Pagination";

const DiaryBanner = ({ diaryRecords }: { diaryRecords: DiaryRecord[] }) => {
  const { diaries, page, setPage } = useDiaries(diaryRecords);

  return (
    <>
      <div className="w-[960px] mx-auto mt-10">
        <span className="text-[22px]">MY DIARY</span>
        <div className="grid grid-cols-4 gap-4 mt-2">
          {diaries.map((diary, index) => (
            <DiaryRecord {...diary} key={index} />
          ))}
        </div>
      </div>
      <Pagination page={page} setPage={setPage} totalPage={10} />
    </>
  );
};

export default DiaryBanner;
