const Meal = ({ meals }: { meals: Meal[] }) => {
  return (
    <div className="w-[960px] mx-auto text-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
        {meals.map((meal, index) => (
          <div
            key={index}
            className="relative w-[234px] h-[241px] overlow-hidden"
          >
            <img
              className="h-full w-full rounded object-cover"
              src={meal.img}
              alt={meal.desc}
            />
            <div className="absolute bg-primary-300 p-2 bottom-0 flex text-white">
              <p className="font-normal text-[15px] leading-[18px] tracking-[0.15px]">
                {meal.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meal;