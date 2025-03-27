import Button from "../../components/button";
import closeButton from "../../svg/close.svg";
import { Link } from "react-router-dom";
import Form from "../../components/form";

const Registration = ({}) => {
  return (
    <div className="grid">
      <Form link="/login" btnText="Registration" />
    </div>
  );
};

export default Registration;
