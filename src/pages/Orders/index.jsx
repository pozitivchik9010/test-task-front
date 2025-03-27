import { Link } from "react-router-dom";
import Button from "../../components/button";
import Header from "../../components/header";
import backButton from "../../svg/back.svg";
import CardOrder from "../../components/cardOrder";
const Orders = ({ orders }) => {
  return (
    <div className="flex-column gap--small">
      <Header />
      <div className="btn_contain__head">
        <Link to="../">
          <Button
            className="btn__item btn_contain__head"
            child={<img src={backButton} alt="Back button" />}
          />
        </Link>
        <h1 className="title">Orders</h1>
      </div>
      <CardOrder orders={orders} />
    </div>
  );
};

export default Orders;
