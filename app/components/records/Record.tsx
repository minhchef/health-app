type RecordProps = {
    imageSrc: string;
    title: string;
    subtitle: string;
};

const Record = ({ imageSrc, title, subtitle }: RecordProps) => {
    return (
        <div className="h-[288px] border border-primary-300 border-20 overflow-auto flex justify-center items-center bg-no-repeat relative overflow-hidden">
            <div className="absolute z-10 flex flex-col gap-2 justify-center items-center">
                <span className="text-primary-300 text-[25px] font-normal leading-[30px]">{title}</span>
                <div className="flex justify-center items-center w-[160px] font-noto-san text-[14px] pb-1 font-light leading-[20px] text-center text-white decoration-skip-none underline-offset-auto bg-primary-400">
                    {subtitle}
                </div>
            </div>
            <img
                className="h-[248px] grayscale absolute bg-[#000] z-1 grayscale brightness-50 object-cover"
                src={imageSrc}
                alt={title}
            />
        </div>
    );
};

export default Record;
