import { ResponsiveLine } from "@nivo/line";

const DiaryChart = ({ data, top, bottom }: Diary) => {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top, right: 50, bottom, left: 50 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "point"
      }}
      enableGridY={false}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0
      }}
      axisLeft={null}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      theme={{
        axis: {
          ticks: {
            text: {
              fill: "#ffffff",
            },
          },
        },
      }}
    />
  );
};

export default DiaryChart;
