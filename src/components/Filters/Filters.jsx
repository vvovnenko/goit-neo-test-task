import LocationFilter from "../LocationFilter/LocationFilter.jsx";
import VehicleFilter from "../VehicleFilter/VehicleFilter.jsx";
import css from "./Filters.module.css";
import Button from "../Button/Button.jsx";
import { fetchTrucks } from "../../redux/catalog/operations.js";
import { useDispatch } from "react-redux";

export default function Filters() {
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <LocationFilter />
      <VehicleFilter />
      <Button onClick={() => dispatch(fetchTrucks())}>Search</Button>
    </div>
  );
}
