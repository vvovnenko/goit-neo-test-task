import { Link } from "react-router-dom";

const Catalog = () => {
  return (
    <div>
      <h1>Catalog page</h1>
      <ul>
        <li>
          <Link to={`/catalog/1`}>Truck #1</Link>
        </li>
        <li>
          <Link to={`/catalog/2`}>Truck #2</Link>
        </li>
        <li>
          <Link to={`/catalog/3`}>Truck #3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Catalog;
