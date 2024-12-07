import React from "react";
import Heading from "./Heading";
import { steps } from "../constants";
import StepCard from "./StepCard";

const Usage = () => {
  return (
    <section className="container mx-auto mt-[80px]">
      <Heading title="How it works" desc="HOW?" />
      <div className="mt-[60px] grid grid-cols-4 gap-[40px]">
        {steps.map((step) => (
          <StepCard
            arrow={step.id === steps.length ? false : true}
            key={step.id}
            title={step.title}
            img={step.image}
            desc={step.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default Usage;
