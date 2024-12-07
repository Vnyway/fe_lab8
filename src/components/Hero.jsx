import React from "react";

const Hero = () => {
  return (
    <section
      className="w-full text-white h-[800px] bg-cover bg-no-repeat flex justify-center items-center"
      style={{ backgroundImage: `url("./images/hero_1.jpg")` }}>
      <div className="absolute h-[800px] w-full bg-black bg-opacity-25 -z-1"></div>
      <div className="absolute h-[800px] w-full flex items-center justify-center flex-col gap-[30px]">
        <h1 className="font-[700] text-[40px] md:text-[50px] leading-[56px] text-center text-white">
          The Best Place to <br className="hidden sm:block" /> Buy and Sell
        </h1>
        <p className="font-[500] text-[16px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nihil.
        </p>
        <button className="bg-primary border-[1px] border-primary px-[20px] py-[10px] hover:text-primary hover:bg-transparent ease-out duration-300">
          Register
        </button>
      </div>
    </section>
  );
};

export default Hero;
