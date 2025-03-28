import "./style.scss";
import { motion } from "framer-motion";

const Button = ({ child, className = "", onClick }) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      className={`btn ${className}`}
    >
      {child}
    </motion.button>
  );
};

export default Button;
