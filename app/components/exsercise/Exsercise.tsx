const Exercise = ({ name, time, calories }: Exercise) => {
  return (
    <div className="flex flex-col items-start border-b border-gray-400 border-1 flex-1">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <span className="text-[5px]">●</span>
          <div>{name}</div>
        </div>
        <span className="font-normal text-lg text-primary-300">{time}</span>
      </div>
      <span className="font-normal text-lg text-primary-300 ml-5">
        {calories}
      </span>
    </div>
  );
};

export default Exercise;
