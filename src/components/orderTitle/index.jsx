import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Button from "../button";

const OrderTitle = ({ imgButton, text }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="btn_contain__head"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <Button
        onClick={() => navigate(-1)}
        className="btn__item btn_contain__head"
        child={<img src={imgButton} />}
      />
      <motion.h1
        className="title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {text}
      </motion.h1>
    </motion.div>
  );
};

export default OrderTitle;
