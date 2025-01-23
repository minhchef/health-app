import MenuIcon from "../icons/MenuIcon";

type Menu = {
  name: string;
  type: string;
};

const menuItems: Menu[] = [
  {
    name: "Morning",
    type: "morning",
  },
  {
    name: "Lunch",
    type: "lunch",
  },
  {
    name: "Dinner",
    type: "dinner",
  },
  {
    name: "Snack",
    type: "snack",
  },
];

type FilterIconsProps = {
  setFilter: (filter: string) => void;
  currentType: string
};

const FilterIcons = ({ setFilter, currentType }: FilterIconsProps) => {
  return (
    <div className="flex content-center gap-16 w-full max-w-screen-xl mx-auto mt-5 justify-center ">
      {menuItems.map(({ name, type }, index) => (
        <MenuIcon
          key={index}
          name={name}
          currentType={currentType}
          type={type}
          onClick={setFilter}
        />
      ))}
    </div>
  );
};

export default FilterIcons;
