const DiaryRecord = ({ date, time, title, desc }: DiaryRecord) => {
    return (
        <div className="w-[231px] h-[231px] border-2 border-main p-4 flex flex-col">
            <span className="text-lg">{date}</span>
            <span className="text-lg">{time}</span>
            <span className="text-xs font-noto-san">{title}</span>
            <p className="text-xs font-noto-san overflow-hidden multi-line-truncate">{desc}</p>
        </div>
    )
}

export default DiaryRecord;
