import React from "react";
import "./home.css";
import { motion } from "framer-motion";
import About from "../about/about";

const Home = () => {
  const variants = {
    initial: {
      opacity: 0,
      y: 8,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.61, 1, 0.88, 1],
      },
    },
  };
  return (
    <motion.div initial="initial" animate="enter" variants={variants}>
      <div className="hmPage">
        <div className="hmText">
          <p className="hmTitle">Wasserman Ramsay Chartered Accountants</p>
        </div>
        <div className="hmPic">
            <p className="slog">Accounting for Every Business</p>
        </div>
        </div>
        <About></About>
    </motion.div>
  );
};

export default Home;
