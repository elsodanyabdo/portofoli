import React, { useEffect, useState } from "react";
import "./header.css";
const Header = () => {
  const [menu, setMenu] = useState(false);
  const [mode, setMode] = useState("dark");
  // const[icon , setIcon] =useState(mode)
  useEffect(() => {
    if (mode === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      // document.querySelector(".mode span").classList.remove("icon-moon-o")
      // document.querySelector(".mode span").classList.add("icon-sun")
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      // document.querySelector(".mode span").classList.remove("icon-sun")
      // document.querySelector(".mode span").classList.add("icon-moon-o")
    }
  }, [mode]);
  return (
    <header className=" df">
      <button
        className="menu icon-menu"
        onClick={() => {
          setMenu(true);
        }}
      ></button>
      <div />

      <nav>
        <ul className="df">
          <li>
            <a href="#hero">About</a>
          </li>
          <li>
            <a href="#project">Articles</a>
          </li>
          <li>
            <a href="#art">Projects</a>
          </li>
          <li>
            <a href="#">Speaking</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          //onclick save current value to loaclstorge

          localStorage.setItem(
            "currentrMode",
            mode === "dark" ? "light" : "dark"
          );
          //change the mode if light chagne to dark if dark change it to light
          console.log(localStorage.getItem("currentrMode"));
          setMode(localStorage.getItem("currentrMode"));
        }}
        className="mode df"
      >
        {mode === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>

      {menu && (
        <div className="fixed ">
          <ul className="model">
            <li className="right">
              <button
                className="icon-close"
                onClick={() => {
                  setMenu(false);
                }}
              ></button>
            </li>
            <li>
              <a href="#hero">About</a>
            </li>
            <li>
              <a href="#project">Articles</a>
            </li>
            <li>
              <a href="#art">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
