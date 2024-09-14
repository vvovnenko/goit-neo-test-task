import { useSelector } from "react-redux";
import { selectTrucks } from "../../redux/catalog/slice.js";
import TruckListItem from "../TruckListItem/TruckListItem.jsx";
import css from "./TrucksList.module.css";

const TruckList = () => {
  const trucks = useSelector(selectTrucks);

  return (
    <div className={css.container}>
      {trucks.map((item) => (
        <TruckListItem key={item.id} data={item} />
      ))}
    </div>
  );
};

export default TruckList;
