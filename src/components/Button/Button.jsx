import clsx from "clsx";
import css from "./Button.module.css";
import { Link } from "react-router-dom";

const Button = ({
  link = null,
  light = false,
  onClick = () => {},
  children,
}) => {
  const className = clsx(css.btn, light ? css.light : css.red);
  if (link) {
    return (
      <Link className={className} to={link}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
