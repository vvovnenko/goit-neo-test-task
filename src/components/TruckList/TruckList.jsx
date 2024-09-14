import { useSelector } from "react-redux";
import { selectTrucks } from "../../redux/catalog/slice.js";
import { Link } from "react-router-dom";

const TruckList = () => {
  const trucks = useSelector(selectTrucks);

  return (
    <ul>
      {trucks.map((item) => (
        <li key={item.id}>
          <Link to={`/catalog/${item.id}`}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default TruckList;
