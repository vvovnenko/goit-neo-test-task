import css from "./LocationFilter.module.css";
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
    <div className={css.location}>
      <label htmlFor="location" className={css.locationLabel}>
        Location
      </label>
      <input
        type="text"
        id="location"
        className={css.locationInput}
        placeholder="City"
        onChange={handleEnterLocation}
        value={location}
      />
      <div className={css.locationWrapper}>
        <div>{location ? <LocationActiveIcon /> : <LocationIcon />}</div>
      </div>
    </div>
  );
}
