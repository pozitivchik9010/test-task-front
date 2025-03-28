import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../components/button";
import Field from "../field";
import SocialBlock from "../social_network";
import closeButton from "../../svg/close.svg";
import "./style.scss";

const Form = ({ btnText }) => {
  const location = useLocation();
  const isLogin = location.pathname === "/login";

  return (
    <motion.div
      className="form"
      initial={isLogin ? { opacity: 0, x: -50 } : { opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={isLogin ? { opacity: 0, x: -50 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="btn_cont">
        <div className="form_btn_contain__head">
          <Link to="/login">
            <Button
              className={`btn_selected ${isLogin ? "select" : ""}`}
              child="Login"
            />
          </Link>
          <Link to="/registration">
            <Button
              className={`btn_selected ${!isLogin ? "select" : ""}`}
              child="Registration"
            />
          </Link>
        </div>
        <Link to="../">
          <Button
            className="btn__item"
            child={<img src={closeButton} alt="Close" />}
          />
        </Link>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={isLogin ? "login" : "register"}
          initial={isLogin ? { opacity: 0, y: 20 } : { opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={isLogin ? { opacity: 0, y: -20 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="field__cont">
            <Field placeholder="Email or Mobile" />
            <Field placeholder="Password" />
            {!isLogin && <Field placeholder="Confirm Password" />}
          </div>
        </motion.div>
      </AnimatePresence>
      {!isLogin && (
        <label className="custom-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          Use social networks
        </label>
      )}
      <Button child={btnText} />

      <SocialBlock />
      <a className="link" href="#">
        Forgot password?
      </a>
    </motion.div>
  );
};

export default Form;
