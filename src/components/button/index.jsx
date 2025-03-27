import "./style.scss";

const Button = ({ child, className = "" }) => {
  return <button className={`btn ${className || ""}`}>{child}</button>;
};

export default Button;
