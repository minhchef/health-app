import DiaryChart from "../chart/DiaryChart";

const RecordBanner = ({ diaryData, date }: { diaryData: DiaryData, date: string }) => {
  return (
    <div className="w-[960px] flex flex-col max-w-screen-xl h-80 justify-between mx-auto items-center shadow-md bg-dark-500 mt-10">
      <div className="flex justify-start items-center w-full gap-5 p-4">
        <span className="text-[15px] font-normal text-white leading-[18px]">
          BODY
          <br />
          RECORD
        </span>
        <span className="text-[22px] font-normal text-white leading-[18px]">
          {date}
        </span>
      </div>
      <div className="w-[960px] h-[340px] mx-auto">
        <DiaryChart data={diaryData} top={10} bottom={20} />
      </div>
      <div className="flex gap-3 justify-start w-full p-4">
        <div className="flex items-center justify-center w-[56px] text-[15px] font-normal text-primary-300 bg-white font-normal rounded-2xl">日</div>
        <div className="flex items-center justify-center w-[56px] text-[15px] font-normal text-primary-300 bg-white font-normal rounded-2xl">週</div>
        <div className="flex items-center justify-center w-[56px] text-[15px] font-normal text-primary-300 bg-white font-normal rounded-2xl">月 </div>
        <div className="flex items-center justify-center w-[56px] text-[15px] font-normal text-white bg-primary-300 font-normal rounded-2xl">年</div>
      </div>
    </div>
  );
};

export default RecordBanner;
