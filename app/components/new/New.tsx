const New = ({ image, date, desc, tags }: New) => {
  return (
    <div className="max-w-sm bg-white">
      <a href="#" className="relative">
        <img src={image} alt="" />
        <div className="absolute bg-primary-300 p-2 bottom-0 flex text-white">
          <p className="font-normal text-[15px] leading-[18px] tracking-[0.15px]">
            {date}
          </p>
        </div>
      </a>
      <div className="mt-2">
        <a href="#">
          <h5 className="mb-2 text-[15px] font-normal font-noto0san">{desc}</h5>
        </a>
        <div className="flex gap-3">
          {tags &&
            tags.map((tag, index) => (
              <a
                href="$"
                key={index}
                className="mb-3 font-normal text-primary-300"
              >
                {tag}
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default New;
