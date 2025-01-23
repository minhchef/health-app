import DiaryChart from "../chart/DiaryChart";
import ProgressPie from "../chart/Progress";

const MainBanner = ({
  diaryData,
  progress,
}: {
  diaryData: DiaryData;
  progress: Progress;
}) => {
  return (
    <div className="w-full max-w-screen-xl h-80 flex justify-between mx-auto items-center shadow-md bg-dark-600">
      <div className="w-[540px] h-[320px] overflow-hidden bg-[url('/images/d01.jpg')] bg-center flex items-center justify-center">
        <ProgressPie progress={progress.percent} date={progress.date} />
      </div>

      <div className="w-[740px] h-[320px]">
        <DiaryChart data={diaryData} top={30} bottom={60} />
      </div>
    </div>
  );
};

export default MainBanner;
