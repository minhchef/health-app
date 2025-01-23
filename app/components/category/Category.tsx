const Category = ({ name, category }: Category) => {
    return (
        <div className="h-[144px] bg-dark-600 p-4 flex flex-col gap-1 justify-between">
            <span className="text-[22px] text-primary-300">{name}</span>
            <div className="mx-auto w-[56px] h-[1px] border-1 border-b border-white"></div>
            <span className="p-2 bgtext-lg font-noto-san text-white">{category}</span>
        </div>
    );
};

export default Category;
