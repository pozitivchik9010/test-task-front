import { Link } from "react-router-dom";
import Button from "../../components/button";
import Header from "../../components/header";
import backButton from "../../svg/back.svg";
import CardOrder from "../../components/cardOrder";
import { motion } from "framer-motion"; // імпортуємо motion
import OrderTitle from "../../components/orderTitle";

const Orders = ({ orders }) => {
  return (
    <div className="flex-column gap--small">
      <Header />
      <OrderTitle imgButton={backButton} text={"Orders"} />
      <CardOrder orders={orders} />
    </div>
  );
};

export default Orders;
