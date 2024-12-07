import React, { useState } from "react";
import { headerLinks } from "../constants";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="container mx-auto absolute z-20 top-0 left-0 right-0 bg-transparent font-300 text-[15px] h-[100px] font-arimo flex items-center justify-between">
      <a href="#">
        <img src="./images/logo.png" alt="logo" />
      </a>
      <nav className="items-center gap-[20px] hidden md:flex">
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
        className="text-white transition-all duration-300 ease-out hover:text-primary hidden md:block">
        Sign In / Register
      </a>
      <div className="md:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? "./images/close.svg" : "./images/menu.svg"}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          }  bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-end flex-1 bg-white bg-opacity-90 p-[20px] rounded-md">
            {headerLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-normal cursor-pointer text-[16px] text-black hover:text-primary transition-all ease-out duration-300 ${
                  index === headerLinks.length - 1 ? "mb-0" : "mb-4"
                }`}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
