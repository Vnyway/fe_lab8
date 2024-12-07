import React from "react";
import {
  AboutUs,
  Goods,
  Header,
  Hero,
  Testimonials,
  Usage,
} from "./components";

const App = () => {
  return (
    <React.Fragment className="relative">
      <Header />
      <main>
        <Hero />
        <Goods />
        <Usage />
        <AboutUs />
        <Testimonials />
      </main>
    </React.Fragment>
  );
};

export default App;
