import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// import { useStateContext } from "../context";
import CustomButton from "./CustomButton";
import { logo, menu, search, thirdweb } from "../assets";
import { navlinks } from "../constants";

const navbarVariants = {
  close: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");
  const [toggleDrawer, setToggleDrawer] = useState(false);
  //   const { connect, false } = useStateContext();

  return (
    <motion.div className="flex md:flex-row flex-col-reverse justify-between gap-6">
      <motion.div
        initial={{ y: "-100px", opacity: "0" }}
        animate={{ y: "0", opacity: 1 }}
        transition={{ duration: 1 }}
        className="lg:flex-1 shadow-md  flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]"
      >
        <input
          type="text"
          placeholder="Search for campaigns"
          className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none"
        />

        <motion.div
          initial={{ y: "-100px", opacity: "0" }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer"
        >
          <img
            src={search}
            alt="search"
            className="w-[15px] h-[15px] object-contain"
          />
        </motion.div>
      </motion.div>

      <motion.div className="sm:flex hidden flex-row justify-end gap-4">
        <motion.div
          initial={{ y: "-100px", opacity: "0" }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <CustomButton
            btnType="button"
            title={false ? "Create a campaign" : "Connect"}
            styles={
              false
                ? "bg-[#1dc071]"
                : " shadow-[#8c6dfd] shadow-button bg-[#8c6dfd]"
            }
            handleClick={() => {
              // if (false) navigate("create-campaign");
              // else connect();
            }}
          />
        </motion.div>
        <motion.div
          initial={{ y: "-100px", opacity: "0" }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Link to="/profile">
            <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
              <img
                src={thirdweb}
                alt="user"
                className="w-[60%] h-[60%] object-contain"
              />
            </div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Small screen navigation */}
      <motion.div className="sm:hidden flex justify-between items-center relative">
        <motion.div
          initial={{ y: "-100px", opacity: "0" }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-[40px] shadow-[#4acd8d] shadow-button h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer"
        >
          <motion.img
            initial={{ y: "-100px", opacity: "0" }}
            animate={{ y: "0", opacity: 1 }}
            transition={{ duration: 1 }}
            src={logo}
            alt="user"
            className="w-[60%]   h-[60%] object-contain"
          />
        </motion.div>

        <motion.img
          initial={{ y: "-100px", opacity: "0" }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ duration: 1 }}
          src={menu}
          alt="menu"
          className="w-[34px] h-[34px] object-contain cursor-pointer"
          onClick={() => setToggleDrawer((prev) => !prev)}
        />

        <motion.div
          variants={navbarVariants}
          initial="close"
          animate={toggleDrawer ? "open" : "close"}
          className={`absolute top-[60px] right-0 left-0 overflow-hidden rounded-xl bg-[#1c1c24] z-10 shadow-secondary py-4 ${
            !toggleDrawer ? "-translate-y-[100vh]" : "translate-y-0"
          }`}
        >
          <ul className="mb-4">
            {navlinks.map((link) => (
              <li
                key={link.name}
                className={`flex p-4 ${
                  isActive === link.name && "bg-[#3a3a43]"
                }`}
                onClick={() => {
                  setIsActive(link.name);
                  setToggleDrawer(false);
                  navigate(link.link);
                }}
              >
                <img
                  src={link.imgUrl}
                  alt={link.name}
                  className={`w-[24px] h-[24px] object-contain ${
                    isActive === link.name ? "grayscale-0" : "grayscale"
                  }`}
                />
                <p
                  className={`ml-[20px] font-epilogue font-semibold text-[14px] ${
                    isActive === link.name ? "text-[#1dc071]" : "text-[#808191]"
                  }`}
                >
                  {link.name}
                </p>
              </li>
            ))}
          </ul>

          <div className="flex mx-4">
            <CustomButton
              btnType="button"
              title={false ? "Create a campaign" : "Connect"}
              styles={
                false
                  ? "bg-[#1dc071]"
                  : "shadow-[#8c6dfd] shadow-button bg-[#8c6dfd]"
              }
              handleClick={() => {
                // if (false) navigate("create-campaign");
                // else connect();
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
