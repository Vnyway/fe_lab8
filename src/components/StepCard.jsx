const StepCard = ({ img, title, desc, arrow }) => {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex items-center justify-between">
        <div className="size-[90px] rounded-full bg-primary flex justify-center items-center">
          <img className="w-[30px]" src={img} alt={title} />
        </div>
        <img
          className={`${!arrow ? "hidden" : ""} `}
          src="./images/arrow-right.png"
          width="17px"
          alt="arrow"
        />
      </div>
      <h3 className="font-[700] text-[24px]">{title}</h3>
      <p className="text-text text-[15px]">{desc}</p>
    </div>
  );
};

export default StepCard;
