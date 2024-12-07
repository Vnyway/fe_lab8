import React from "react";
import Heading from "./Heading";
import AboutCard from "./AboutCard";
import { about } from "../constants";

const AboutUs = () => {
  return (
    <section className="container mx-auto mt-[80px] flex-col lg:flex-row flex gap-[40px] items-center">
      <div className="flex-1">
        <img src="./images/hero_1.jpg" alt="hero" className="object-contain" />
      </div>
      <div className="flex-1 flex flex-col gap-[20px]">
        <Heading center={false} title="About Us" desc="ABOUT?" />
        {about.map((card) => (
          <AboutCard img={card.img} title={card.title} desc={card.desc} />
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
