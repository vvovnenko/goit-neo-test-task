import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./AppBar.module.css";
import Logo from "../Logo/Logo.jsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const AppBar = () => {
  return (
    <div className={css.bar}>
      <span className={css.logo}>
        <Logo />
      </span>
      <NavLink className={buildLinkClass} to="/" end>
        Home
      </NavLink>
      <NavLink className={buildLinkClass} to="/catalog" end>
        Catalog
      </NavLink>
    </div>
  );
};

export default AppBar;
