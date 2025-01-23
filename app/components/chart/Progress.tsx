import { ResponsivePie } from "@nivo/pie";

const ProgressPie = ({
  progress,
  date,
}: {
  progress: number;
  date: string;
}) => {
  const data = [
    { id: "completed", value: progress, label: "Completed", color: "#FFFFFF" },
    {
      id: "remaining",
      value: 100 - progress,
      label: "Remaining",
      color: "transparent",
    },
  ];

  return (
    <div className="w-[181px] h-[181px] relative flex items-center justify-center">
      <ResponsivePie
        data={data}
        innerRadius={0.95}
        padAngle={1}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={({ id, data }) => data.color}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        enableArcLinkLabels={false}
        enableArcLabels={false}
      />
      <div
        className="text-white absolute font-sans font-normal leading-[30px]"
        style={{ textShadow: "0px 0px 6px #FCA500" }}
      >
        <span className="text-[18pxpx]">{date}</span>
        <span className="text-[25px]"> {progress}%</span>
      </div>
    </div>
  );
};

export default ProgressPie;
