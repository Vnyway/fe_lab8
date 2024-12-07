import React, { useState } from "react";
import Heading from "./Heading";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../constants";

const Testimonials = () => {
  const [page, setPage] = useState(0);
  let testimonial1 = testimonials[page];
  let testimonial2 = testimonials[page + 1];
  return (
    <section
      className="h-[560px] w-full mt-[40px] relative"
      style={{
        backgroundImage: `url("./images/hero_1.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <div className="absolute top-0 left-0 w-full h-full -z-1 bg-primary bg-opacity-80"></div>
      <div className="absolute top-0 left-0 right-0 w-full h-full container mx-auto py-[40px] flex flex-col items-center gap-[60px]">
        <Heading
          center={true}
          white={true}
          title="Happy Clients"
          desc="TESTIMONIALS"
        />
        <div className="w-full h-full flex gap-[40px]">
          <TestimonialCard
            img={testimonial1.image}
            name={testimonial1.name}
            job={testimonial1.job}
            speech={testimonial1.speech}
          />
          <TestimonialCard
            img={testimonial2.image}
            name={testimonial2.name}
            job={testimonial2.job}
            speech={testimonial2.speech}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
