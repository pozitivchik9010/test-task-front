import "./style.scss";

const Field = ({ name, type, placeholder, action }) => {
  return (
    <input
      type={type}
      className="field__input validation"
      name={name}
      placeholder={placeholder}
      onInput={(e) => action(e.target.name, e.target.value)}
    />
  );
};
export default Field;
