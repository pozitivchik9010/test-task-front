import { Link } from "react-router-dom";
import Divider from "../divider";
import { motion } from "framer-motion"; // імпортуємо motion

import "./style.scss";

const Order = ({ orders }) => {
  const order = Array.isArray(orders) ? orders : [];
  return (
    <>
      {order.length > 0 ? (
        order.map((order) => (
          <Link to={`../order/${order.transactionId}`}>
            <motion.div
              initial={{ opacity: 0, y: -20 }} // Початкове значення (невидимість і зсув)
              animate={{ opacity: 1, y: 0 }} // Кінцеве значення
              exit={{ opacity: 0, y: 20 }} // Анімація при видаленні
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
          </Link>
        ))
      ) : (
        <h1>No orders found</h1>
      )}
    </>
  );
};
export default Order;
