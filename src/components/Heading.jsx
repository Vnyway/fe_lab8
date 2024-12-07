import React from "react";

const Heading = ({ desc, title, center, white }) => {
  return (
    <div className={`flex flex-col gap-[5px] ${center ? "text-center" : ""}`}>
      <span
        className={`text-[16px] font-[500] ${
          white ? "text-white" : "text-primary"
        }`}>
        {desc}
      </span>
      <h3
        className={`font-[600] text-[40px] ${
          white ? "text-white" : "text-black"
        }`}>
        {title}
      </h3>
    </div>
  );
};

export default Heading;
