import { Link } from "react-router-dom";
import RatingPressedIcon from "../../icons/RatingPressedIcon.jsx";
import HeartPressedIcon from "../../icons/HeartPressedIcon.jsx";
import LocationActiveIcon from "../../icons/LocationActiveIcon.jsx";
import TruckCategories from "../TruckCategories/TruckCategories.jsx";
import css from "./TruckListItem.module.css";
import Button from "../Button/Button.jsx";

const TruckListItem = ({ data }) => {
  return (
    <div className={css.container}>
      <img
        src={data.gallery[0].thumb}
        alt="truck photo"
        className={css.thumb}
      />
      <div className={css.info}>
        <div className={css.header}>
          <h2 className={css.title}>{data.name}</h2>
          <div className={css.priceWrapper}>
            <p>€{data.price}.00</p>
            <div className={css.iconWrapper}>
              <HeartPressedIcon />
            </div>
          </div>
        </div>

        <div className={css.extraInfoWrapper}>
          <span className={css.rating}>
            <div className={css.ratingIcon}>
              <RatingPressedIcon />
            </div>
            {`${data.rating}(${data.reviews.length} Reviews)`}
          </span>
          <span className={css.location}>
            <LocationActiveIcon />
            {data.location}
          </span>
        </div>

        <p className={css.description}>{data.description}</p>
        <TruckCategories data={data} />
        <div className={css.showMoreBtn}>
          <Button link={`/catalog/${data.id}`}>Show more</Button>
        </div>
      </div>
    </div>
  );
};

export default TruckListItem;
