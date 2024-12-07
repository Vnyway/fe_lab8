import React from "react";
import { headerLinks } from "../constants";

const Header = () => {
  return (
    <header className="container mx-auto absolute z-20 top-0 left-0 right-0 bg-transparent font-300 text-[15px] h-[100px] font-arimo flex items-center justify-between">
      <a href="#">
        <img src="./images/logo.png" alt="logo" />
      </a>
      <nav className=" items-center gap-[20px] hidden md:flex">
        {headerLinks.map((link) => (
          <a
            className="text-white transition-all duration-300 ease-out hover:text-primary"
            href="#"
            key={link.id}>
            {link.title}
          </a>
        ))}
      </nav>
      <a
        href="#"
        className="text-white transition-all duration-300 ease-out hover:text-primary">
        Sign In / Register
      </a>
    </header>
  );
};

export default Header;
