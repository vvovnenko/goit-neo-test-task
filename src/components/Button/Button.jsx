import css from "./Button.module.css";
import { Link } from "react-router-dom";
const Button = ({ link = null, children }) => {
  if (link) {
    return (
      <Link className={css.btn} to={link}>
        {children}
      </Link>
    );
  }
  return <button>{children}</button>;
};

export default Button;
