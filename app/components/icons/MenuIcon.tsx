import Cup from "./Cup";
import Folk from "./Folk";

const MenuIcon = ({
  type,
  name,
  onClick,
  currentType,
}: {
  name: string;
  type: string;
  currentType: string;
  onClick: (type: string) => void;
}) => {
  const fill = type === currentType ? "#777777" : "#FFFFFF";
  return (
    <div
      className={`cursor-pointer flex flex-col justify-center items-center bg-[url('/images/ico/oval.svg')] w-[117px] h-[136px] bg-no-repeat ${
        type === currentType ? "text-gray-400" : "text-white"
      } color-white`}
      onClick={() => onClick(type.toLowerCase())}
    >
      {type === "slack" ? <Cup fill={fill} /> : <Folk fill={fill} />}

      <span className="font-normal text-[20px] leading-[24px] text-center">
        {name}
      </span>
    </div>
  );
};

export default MenuIcon;
