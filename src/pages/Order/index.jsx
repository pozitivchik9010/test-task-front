import { Link, useParams } from "react-router-dom";
import Divider from "../../components/divider";
import Header from "../../components/header";
import Button from "../../components/button";
import closeButton from "../../svg/close.svg";
import "./style.scss";

const OrderDetails = ({ orders }) => {
  const { id } = useParams();
  const order = orders.find((o) => o.transactionId === id);

  if (!order) return <h1>Order not found</h1>;

  return (
    <div className="flex-column gap--small">
      <div className="flex-column gap--small">
        <Header />
        <div className="btn_contain__head">
          <Link to="../">
            <Button
              className="btn__item btn_contain__head"
              child={<img src={closeButton} alt="Back button" />}
            />
          </Link>
          <h1 className="title">#{order.transactionId}</h1>
        </div>
      </div>
      <div className="card_order grid-col-3">
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
      </div>
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
