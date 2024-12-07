import React from "react";

const TestimonialCard = ({ img, name, job, speech }) => {
  return (
    <div className="flex flex-col gap-[20px] w-full md:w-1/2 shrink-0 px-[20px]">
      <div className="flex gap-[10px] items-center">
        <img src={img} alt={name} className="size-[50px] rounded-full" />
        <div className="flex flex-col gap-[2px]">
          <h3 className="text-[23px] text-white">{name}</h3>
          <span className="text-[14px] text-[#ffffff80]">{job}</span>
        </div>
      </div>
      <p className="text-[18px] text-[#ffffff80]">{speech}</p>
    </div>
  );
};

export default TestimonialCard;
