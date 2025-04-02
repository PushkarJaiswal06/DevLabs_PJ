import React from "react";
import { motion } from "framer-motion";

const MorphingTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ clipPath: "circle(0% at 50% 50%)" }}
      animate={{ clipPath: "circle(150% at 50% 50%)" }}
      exit={{ clipPath: "circle(0% at 50% 50%)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        zIndex: 9999,
      }}
    >
      {children}
    </motion.div>
  );
};

export default MorphingTransition;
