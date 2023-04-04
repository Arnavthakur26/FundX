import React from "react";
import HeroAnimation from "../components/HeroAnimation";
import "../styles/Home.css";
import CustomButton from "../components/CustomButton";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div className="text-5xl font-epilogue flex text-justify flex-[1.5 0.5 0%] items-center justify-between font-normal text-white">
        <div className="flex flex-col items-center ">
          <motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0 }}
            >
              <motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  Join the{" "}
                  <motion.span className="text-gradient text-6xl font-semibold">
                    Revolution
                  </motion.span>
                </motion.span>
              </motion.span>
              <br />{" "}
              <motion.span
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {" "}
                Invest in Startups with
              </motion.span>
              <br />{" "}
              <motion.span
                initial={{ opacity: 0, y: 90 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                the power of Blockchain
              </motion.span>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <CustomButton
              btnType="button"
              title="Start Investing"
              styles="shadow-[#8c6dfd] relative top-36 shadow-button bg-[#8c6dfd]"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="w-[35rem] mt-20  h-auto"
        >
          <HeroAnimation />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.5, delay: 1.5 }}
        className="mouse_scroll"
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div>
          <span className="m_scroll_arrows unu"></span>
          <span className="m_scroll_arrows doi"></span>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
