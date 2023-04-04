import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { logo, sun } from "../assets";
import { navlinks } from "../constants";
import { Tooltip } from "@mantine/core";

const boxVariant = {
  hidden: {
    x: -10,
    opacity: 0, //move out of the site
  },
  visible: {
    x: 0,
    opacity: 1, // bring it back to nrmal
    transition: {
      staggerChildren: 0.06,
    },
  },
};
const listVariant = {
  hidden: {
    x: -80,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <Tooltip
    label={name}
    position="right"
    withArrow
    arrowSize={6}
    transitionProps={{ transition: "skew-up", duration: 300 }}
  >
    <motion.li
      variants={listVariant}
      className={`w-[48px] transition h-[48px] rounded-[10px] ${
        isActive && isActive === name && "bg-[#222323] hover:bg-[#222323]"
      } flex justify-center items-center  ${
        !disabled && "cursor-pointer hover:bg-[#3f41437d]"
      } ${styles}`}
      onClick={handleClick}
    >
      {!isActive ? (
        <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
      ) : (
        <img
          src={imgUrl}
          alt="fund_logo"
          className={`w-1/2 h-1/2 ${isActive !== name && "grayscale"}`}
        />
      )}
    </motion.li>
  </Tooltip>
);

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("Dashboard");

  return (
    <div className="flex  justify-between items-center flex-col sticky top-5 h-[93vh]">
      <motion.div
        initial={{ y: "-100px" }}
        animate={{ y: "0" }}
        transition={{ ease: "linear", duration: "1" }}
        className=" "
      >
        <Link to="/">
          <div className="w-[48px] h-[48px] shadow-[#4acd8d] shadow-button flex justify-center items-center bg-[#2C3333] rounded-[10px]">
            <img styles={{ width: "52px", height: "52px" }} src={logo} />
          </div>
        </Link>
      </motion.div>

      <motion.div
        initial={{ x: "-100px" }}
        animate={{ x: "0" }}
        transition={{ duration: 1 }}
        className="flex-1 shadow-md flex flex-col justify-between items-center bg-[#2C3333] rounded-[20px] w-[76px] py-4 mt-12"
      >
        <motion.ul
          variants={boxVariant}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center items-center gap-3"
        >
          {navlinks.map((link) => (
            <Icon
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if (!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))}
        </motion.ul>

        <div className="w-[48px] h-[48px] flex justify-center items-center bg-[#1c1c24] rounded-[10px]">
          <img styles={{ width: "52px", height: "52px" }} src={sun} />
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
