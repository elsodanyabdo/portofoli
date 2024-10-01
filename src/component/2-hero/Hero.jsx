import { React, useRef } from "react";
import "./hero.css";
import Lottie from "lottie-react";
import { motion } from "framer-motion"
import devolperAnimation from "../../animation/Animation - 1727743563628.json";
const Hero = () => {
  const lottieRef = useRef();
  return (
    <section id="hero" className="hero df">
      <div className="left-section">
        <div className="imgs df">
          <motion.img
          initial={{transform: "scale(0)"}}
          animate={{ transform :"scale(1)"}}
          transition={{duration:1, dumping:2 , type:"spring", stiffness:80}}
          className="avater" src="/144941.jpg" alt="" ></motion.img>
          <span className="icon-verified"></span>
        </div>
        <motion.h1 
        initial={{scale : 0}}
        animate={{scale : 1}}
        transition={{duration: 1}}
        className="title">Front End -Engenireeing
         </motion.h1>
        <p className="subtitle">
          I'm abdelrahman saad 'Elsodany' i'm a front-end engenire i work with
          React , html ,css , js and bootstarp
        </p>
        <div className="icon df">
          <a href="https://x.com/ElsodanyAbdo1" target="_blanc"><span className="icon-twitter"></span></a>
          <a href="https://www.instagram.com/elsod_anyabdo/" target="_blanc"><span className="icon-instagram"></span></a>
          <a href="https://github.com/elsodanyabdo" target="_blanc"><span className="icon-github"></span></a>
          <a href="https://www.linkedin.com/in/elsodany-abdo-3b2940217/" target="_blanc"><span className="icon-linkedin"></span></a>
        </div> 
      </div>
      <div className="right-section animation">
        <Lottie
          className="devani"
          lottieRef={lottieRef}
          onLoadedImages={() => {
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devolperAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
