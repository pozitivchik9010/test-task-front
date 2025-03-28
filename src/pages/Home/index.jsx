import Button from "../../components/button";
import Header from "../../components/header";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // імпортуємо motion
import "./style.scss";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main className="main">
        <div className="btn_contain">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/registration">
              <Button child="Registration" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/login">
              <Button child="Login" />
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/orders">
            <Button child="Orders" />
          </Link>
        </motion.div>
      </main>
    </div>
  );
};

export default Home;
