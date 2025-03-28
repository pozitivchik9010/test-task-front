import { Link, useParams } from "react-router-dom";
import Divider from "../../components/divider";
import Header from "../../components/header";
import Button from "../../components/button";
import closeButton from "../../svg/close.svg";
import OrderTitle from "../../components/orderTitle";
import "./style.scss";
import { motion } from "framer-motion";

const OrderDetails = ({ orders }) => {
  const { id } = useParams();
  const order = orders.find((o) => o.transactionId === id);

  if (!order) return <h1>Order not found</h1>;

  return (
    <div className="flex-column gap--small">
      <div className="flex-column gap--small">
        <Header />

        <OrderTitle imgButton={closeButton} text={`#${order.transactionId}`} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="card_order grid-col-3"
      >
        <div>
          Transaction ID
          <p className="card_order__item">#{order.transactionId}</p>
        </div>
        <div>
          Date
          <p className="card_order__item">{order.date}</p>
        </div>
        <div>
          Status
          <p className="card_order__item">{order.status}</p>
        </div>
        <Divider />
        <div>
          Game Name
          <p className="card_order__item">{order.name}</p>
        </div>
        <div>
          Game ID
          <p className="card_order__item">{order.gameId}</p>
        </div>
        <div>
          Amount
          <p className="card_order__item">${order.amount}</p>
        </div>
      </motion.div>
      <div className="btn_cont">
        Your Goods:
        <h3 className="margin--null">1 - 279,99$</h3>
      </div>
      <div className="goods-container ">
        <div className="goods-value">
          <span>40,500</span>
          <span className="goods-bonus">+1,500</span>
        </div>
        <div className="goods-price">
          <span>279,99${"  "}</span>
          <span className="old-price"> 749.99$</span>
        </div>
      </div>

      <Button child="Ask ?" />
    </div>
  );
};

export default OrderDetails;
