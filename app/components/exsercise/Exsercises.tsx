import Exercise from "./Exsercise";

const Exercises = ({ date, details }: Exercises) => {
  return (
    <div className="w-[960px] flex flex-col max-w-screen-xl h-80 justify-start mx-auto items-center shadow-md bg-dark-500 mt-10">

      <div className="flex justify-start items-center w-full gap-5 p-4">
        <span className="text-[15px] font-normal text-white leading-[18px]">
          MY
          <br />
          EXCERISE
        </span>
        <span className="text-[22px] font-normal text-white leading-[18px]">
          {date}
        </span>
      </div>

      <div className="w-full p-4">
        <ul className="scroll-container max-h-[200px] overflow-y-auto">
          {(() => {
            const result = [];
            for (let i = 0; i < details.length; i+= 2) {
              result.push(
                <li key={i} className="flex items-start gap-5 text-white font-noto-san font-[300]">
                    <Exercise {...details[i]} />
                    {details[i + 1] && <Exercise {...details[i + 1]} />}
                </li>
              );
            }
            return result;
          })()}
        </ul>
      </div>
    </div>
  );
};

export default Exercises;
