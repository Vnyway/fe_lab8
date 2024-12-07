import React from "react";

const AboutCard = ({ img, title, desc }) => {
  return (
    <div className="flex gap-[40px] items-center">
      <div className="size-[70px] rounded-full shrink-0 flex items-center justify-center bg-primary">
        <img src={img} alt={title} width="28px" />
      </div>
      <div className="flex flex-col gap-[5px]">
        <h3 className="text-[20px] text-primary">{title}</h3>
        <p className="text-[16px]">{desc}</p>
      </div>
    </div>
  );
};

export default AboutCard;
