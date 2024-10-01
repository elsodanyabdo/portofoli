import React, { useState } from "react";
import "./main.css";

import { AnimatePresence,motion, transform } from "framer-motion";
const myProjects = [
  {
    id: 1,
    projectTitle: "E-commerce",
    catagroy: ["js" ],
    imgPath: "./firstProject.png",
    projectSubtitle:" this is an e-commarce app for buing some product",
    projectLink: "https://fabulous-tulumba-ca1289.netlify.app/",
    projectGit: "https://github.com/elsodanyabdo/Ecommerce"
    
  },
  {
    id: 2,
    projectTitle: "Password Generater",
    catagroy: [ "js"],
    imgPath: "./passwordGenerater.jpeg",
    projectSubtitle:" this is a passwordGenerater to make a strong password",
     projectLink: "https://peaceful-croissant-30d184.netlify.app/",
     projectGit: "https://github.com/elsodanyabdo/passwordGenerator-"
  },
  {
    id: 3,
    projectTitle: "Curds",
    catagroy: ["js" ],
    imgPath: "./Curds.jpeg",
    projectSubtitle:" this is a product manger",
     projectLink: "https://66fc49de1c356fb15b63adef--incandescent-gumdrop-97e445.netlify.app/",
     projectGit: "https://github.com/elsodanyabdo/curds"
  },
  {
    id: 4,
    projectTitle: "Quiz App",
    catagroy: ["js"],
    imgPath: "./QiuzApp.jpeg",
    projectSubtitle:" this is a simple quiz app",
     projectLink: "https://harmonious-cannoli-9bfd4b.netlify.app/",
     projectGit: "https://github.com/elsodanyabdo/quizApp"
  },
  {
    id: 5,
    projectTitle: "Portoflio",
    catagroy: ["React"],
    imgPath: "./portfolio.jpeg",
    projectSubtitle:" this is a portfolio for all project waht did you do",
     projectLink: "https://portfolio-ec8f1.web.app/",
     projectGit: "https://github.com/elsodanyabdo/WeatherApp"
  },
  {
    id: 6,
    projectTitle: "Landing Page",
    catagroy: ["css"],
    imgPath: "./landing page.jpeg",
    projectSubtitle:" this is a landing page",
     projectLink: "",
     projectGit: "https://github.com/elsodanyabdo/html-css"

  },
  {
    id: 7,
    projectTitle: "Creatvio Page",
    catagroy: ["css"],
    imgPath: "./creativo.png",
    projectSubtitle:" this is a simple project for webpage ",
     projectLink: "https://startling-pika-1d4aa5.netlify.app/",
     projectGit: "https://github.com/elsodanyabdo/challenge-one"
  },
  {
    id: 8,
    projectTitle: "Wather App",
    catagroy: ["js"],
    imgPath: "./weather app.jpeg",
    projectSubtitle:" this is a simple api project for wather for all country  ",
     projectLink: "https://66fc4ad63f7bb2b0160790ca--heroic-mooncake-58694e.netlify.app/",
     projectGit: "https://github.com/elsodanyabdo/WeatherApp"
  },
  {
    id: 8,
    projectTitle: "To Do App",
    catagroy: ["js"],
    imgPath: "./todoapp.jpeg",
    projectSubtitle:" this is a simple to do app project with localstorge",
     projectLink: "https://effervescent-sunshine-360291.netlify.app/",
     projectGit: "https://github.com/elsodanyabdo/toDoApp"
  },
  {
    id: 9,
    projectTitle: "KUDZOKA",
    catagroy: ["css"],
    imgPath: "./KUDZOKA.jpeg",
    projectSubtitle:"  this is a simple project for webpage ",
     projectLink: "https://melodic-clafoutis-b22fba.netlify.app/",
     projectGit: "https://github.com/elsodanyabdo/challenge-two"
  },
  {
    id: 10,
    projectTitle: "Netfilx",
    catagroy: ["css"],
    imgPath: "./netfilx.jpeg",
    projectSubtitle:"  this is a simple clone from netflix ",
     projectLink: "https://curious-genie-d40030.netlify.app/",
     projectGit: "https://github.com/elsodanyabdo/NetFlix"
  },
  {
    id: 11,
    projectTitle: "5amsat",
    catagroy: ["css"],
    imgPath: "./5amsat.jpeg",
    projectSubtitle:"  this is a simple clone from 5amsat ",
     projectLink: "https://vermillion-fudge-809cd8.netlify.app/",
     projectGit: "https://github.com/elsodanyabdo/5amsat"
  },
];
const Main = () => {
  const [active, setActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handelClick = (buttoncatagory) =>{
    setActive(buttoncatagory);
    const newArr = myProjects.filter((itmes)=> {
      const filterArra = itmes.catagroy.filter((item) => {
        return  item === buttoncatagory
       })
  
    return filterArra[0] === buttoncatagory;
  })
  setArr(newArr)
  }
  return (
    <main id="project" className="main df">
      <section className="left-buttons df">
        <button
          id="project"
          className={active === "all" ? "active" : ""}
          onClick={() => {
            setActive("all");
            setArr(myProjects)
          }}
        >
          All Project
        </button>
        <button
          className={active === "css" ? "active" : ""}
          onClick={() => {
          handelClick("css")
          }}
        >
          Html & Css
        </button>
        <button
          className={active === "js" ? "active" : ""}
          onClick={() => {
            handelClick("js")
          }}
        >
          
          JavaScript
        </button>
        <button
          className={active === "React" ? "active" : ""}
          onClick={() => {
            handelClick("React")
          }}
        >
          React
        </button>
        <button
          className={active === "boot" ? "active" : ""}
          onClick={() => {
            handelClick("boot")
          }}
        >
          bootstarp
        </button>
      </section>
      <section id="art" className="right-cards df">
        <AnimatePresence>
        {arr.map((item) => {
          return (
              <a href={item.projectLink} target="_blank" >
                <motion.div
              layout
              inherit={{transform: "scale(0)"}}
              animate={{transform: "scale(1)"}}
              transition={{type:"spring" ,damping:8 , stiffness: 50}}
              key={item.id} className="card">
                <img width={260} height={150} src={item.imgPath} alt="" />
                <div style={{ width: "260px" }} className="info ">
                  <h3 className="title-card">{item.projectTitle}</h3>
                  <p className="suptitle-card">
                    {item.projectSubtitle}
                  </p>
                  <div className="card-icons df">
                    <div className="left-icon">
                      <span className="icon-link"></span>
                      <a href={item.projectGit} target="_blanc"><span className="icon-github"></span></a>
                    </div>
                    <a href="">
                      more <span className="icon-arrow-right"></span>
                    </a>
                  </div>
                </div>
              </motion.div>
              </a>
          );
        })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
