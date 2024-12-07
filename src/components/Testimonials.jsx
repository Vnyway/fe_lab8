import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../constants";

const Testimonials = () => {
  const [page, setPage] = useState(0);
  const [isLarge, setIsLarge] = useState(window.innerWidth > 768);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage(
        (prevPage) =>
          (prevPage + 1) %
          (isLarge ? testimonials.length / 2 : testimonials.length)
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [isLarge]);

  useEffect(() => {
    const handleResize = () => {
      setIsLarge(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        <div className="w-full h-full overflow-hidden">
          <div
            className="w-full h-full flex transition-all ease-in-out duration-1000"
            style={{ transform: `translateX(-${page * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <TestimonialCard
                img={testimonial.image}
                name={testimonial.name}
                job={testimonial.job}
                speech={testimonial.speech}
              />
            ))}
          </div>
        </div>
        <div className="flex w-full items-center justify-center gap-[8px]">
          <button
            className={`w-[20px] h-[4px] transition-all ease-in-out duration-1000 ${
              page === 0 ? "bg-white" : "bg-black bg-opacity-30"
            }`}
            onClick={() => setPage(0)}></button>
          <button
            className={`w-[20px] h-[4px] transition-all ease-in-out duration-1000 ${
              page === 1 ? "bg-white" : "bg-black bg-opacity-30"
            }`}
            onClick={() => setPage(1)}></button>
          <button
            className={`w-[20px] h-[4px] transition-all ease-in-out duration-1000 ${
              page === 2 ? "bg-white" : "bg-black bg-opacity-30"
            }`}
            onClick={() => setPage(2)}></button>
          <button
            className={`w-[20px] h-[4px] md:hidden transition-all ease-in-out duration-1000 ${
              page === 3 ? "bg-white" : "bg-black bg-opacity-30"
            }`}
            onClick={() => setPage(3)}></button>
          <button
            className={`w-[20px] h-[4px] md:hidden transition-all ease-in-out duration-1000 ${
              page === 4 ? "bg-white" : "bg-black bg-opacity-30"
            }`}
            onClick={() => setPage(4)}></button>
          <button
            className={`w-[20px] h-[4px] md:hidden transition-all ease-in-out duration-1000 ${
              page === 5 ? "bg-white" : "bg-black bg-opacity-30"
            }`}
            onClick={() => setPage(5)}></button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
