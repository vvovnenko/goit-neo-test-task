import { NavLink } from "react-router-dom";

const AppBar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/catalog">Catalog</NavLink>
    </div>
  );
};

export default AppBar;
