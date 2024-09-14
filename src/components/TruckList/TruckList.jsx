import { useSelector } from "react-redux";
import { selectTrucks } from "../../redux/catalog/slice.js";
import TruckListItem from "../TruckListItem/TruckListItem.jsx";

const TruckList = () => {
  const trucks = useSelector(selectTrucks);

  return (
    <div>
      {trucks.map((item) => (
        <TruckListItem key={item.id} data={item} />
      ))}
    </div>
  );
};

export default TruckList;
