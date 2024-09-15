import styles from "./LocationFilter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectLocation } from "../../redux/filter/slice.js";
import { setLocation } from "../../redux/filter/slice.js";
import LocationActiveIcon from "../../icons/LocationActiveIcon.jsx";
import LocationIcon from "../../icons/LocationIcon.jsx";

export default function LocationFilter() {
  const dispatch = useDispatch();
  const location = useSelector(selectLocation);

  function handleEnterLocation(e) {
    const value = e.target.value.trim();
    dispatch(setLocation(value));
  }

  return (
    <div className={styles.location}>
      <label htmlFor="location" className={styles.locationLabel}>
        Location
      </label>
      <input
        type="text"
        id="location"
        className={styles.locationInput}
        placeholder="City"
        onChange={handleEnterLocation}
        value={location}
      />
      <div className={styles.locationWrapper}>
        <div>{location ? <LocationActiveIcon /> : <LocationIcon />}</div>
      </div>
    </div>
  );
}
