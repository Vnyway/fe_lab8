import React from "react";

const Heading = (desc, title, center) => {
  return (
    <div className={`flex flex-col gap-[5px] ${center ? "text-center" : ""}`}>
      <span className="text-[16px] font-[500] text-primary">{desc}</span>
      <h3 className="text-black font-[600] text-[40px]">{title}</h3>
    </div>
  );
};

export default Heading;
