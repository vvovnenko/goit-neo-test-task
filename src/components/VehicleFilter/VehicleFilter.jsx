import styles from "./VehicleFilter.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAC,
  selectBathroom,
  selectVehicleType,
  selectKitchen,
  selectTransmission,
  selectTV,
} from "../../redux/filter/slice.js";
import {
  toggleVehicleType,
  toggleTransmission,
  toggleAC,
  toggleBathroom,
  toggleKitchen,
  toggleTV,
} from "../../redux/filter/slice.js";
import WindIcon from "../../icons/WindIcon.jsx";
import DiagramIcon from "../../icons/DiagramIcon.jsx";
import CupHotIcon from "../../icons/CupHotIcon.jsx";
import TVIcon from "../../icons/TVIcon.jsx";
import DropletIcon from "../../icons/DropletIcon.jsx";
import Grid1x2Icon from "../../icons/Grid1x2Icon.jsx";
import Grid3x3Icon from "../../icons/Grid3x3Icon.jsx";
import GridIcon from "../../icons/GridIcon.jsx";
import clsx from "clsx";

export default function VehicleFilter() {
  const dispatch = useDispatch();
  const vehicleType = useSelector(selectVehicleType);

  const equipments = [
    [useSelector(selectAC), toggleAC, WindIcon, "AC"],
    [
      useSelector(selectTransmission),
      toggleTransmission,
      DiagramIcon,
      "Automatic",
    ],
    [useSelector(selectKitchen), toggleKitchen, CupHotIcon, "Kitchen"],
    [useSelector(selectTV), toggleTV, TVIcon, "TV"],
    [useSelector(selectBathroom), toggleBathroom, DropletIcon, "Bathroom"],
  ];

  const vehicleTypes = [
    ["panelTruck", Grid1x2Icon, "Van"],
    ["fullyIntegrated", Grid3x3Icon, "Fully Integrated"],
    ["alcove", GridIcon, "Alcove"],
  ];

  return (
    <div>
      <h3 className={styles.vehicleTitle}>Filters</h3>

      <h2 className={styles.optionsTitle}>Vehicle equipment</h2>

      <div className={styles.options}>
        {equipments.map(([value, action, Icon, name], key) => (
          <div
            key={key}
            className={clsx(
              styles.optionsItem,
              value && styles.optionsItemActive,
            )}
            onClick={() => dispatch(action())}
          >
            <Icon width={"32"} height={"32"} />
            <p className={styles.optionsItemText}>{name}</p>
          </div>
        ))}
      </div>

      <h2 className={styles.optionsTitle}>Vehicle type</h2>
      <div className={styles.options}>
        {vehicleTypes.map(([value, Icon, name], key) => (
          <div
            key={key}
            className={clsx(
              styles.optionsItem,
              vehicleType === value && styles.optionsItemActive,
            )}
            onClick={() => dispatch(toggleVehicleType(value))}
          >
            <Icon />
            <p className={styles.optionsItemText}>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
