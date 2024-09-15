import css from "./TruckInfo.module.css";
import LocationActiveIcon from "../../icons/LocationActiveIcon.jsx";
import RatingPressedIcon from "../../icons/RatingPressedIcon.jsx";
import { useState } from "react";
import clsx from "clsx";
import ReviewList from "../ReviewList/ReviewList.jsx";
import TruckFeatures from "../TruckFeatures/TruckFeatures.jsx";
import BookForm from "../BookForm/BookForm.jsx";

const TruckInfo = ({ data }) => {
  const [isLinkActive, setIsLinkActive] = useState("features");

  const createInfoTabClassName = (tab) => {
    return clsx(
      css.infoNavigationTab,
      isLinkActive === tab && css.infoNavigationTabActive,
    );
  };

  return (
    <>
      <div className={css.header}>
        <h2 className={css.headerTitle}>{data.name}</h2>
        <div className={css.headerInfo}>
          <span className={css.reviews}>
            <div className={css.reviewsIcon}>
              <RatingPressedIcon />
            </div>
            <span className={css.reviewsText}>{`${data.rating}(${
              data.reviews ? data.reviews.length : null
            } Reviews)`}</span>
          </span>
          <span className={css.location}>
            <LocationActiveIcon width={16} height={16} />
            {data.location}
          </span>
        </div>
        <div className={css.price}>€{data.price}.00</div>
      </div>
      <div className={css.gallery}>
        {data.gallery.map((item, index) => (
          <img
            className={css.galleryPhoto}
            src={item.original}
            alt="truck photo"
            key={index}
          />
        ))}
      </div>
      <div>
        <p className={css.description}>{data.description}</p>
        <div>
          <div className={css.infoNavigation}>
            <span
              className={createInfoTabClassName("features")}
              onClick={() => setIsLinkActive("features")}
            >
              Features
            </span>
            <span
              className={createInfoTabClassName("reviews")}
              onClick={() => setIsLinkActive("reviews")}
            >
              Reviews
            </span>
          </div>
        </div>
        <div className={css.infoWrapper}>
          <div>
            {isLinkActive === "features" ? (
              <TruckFeatures data={data} />
            ) : (
              <ReviewList reviews={data.reviews || []} />
            )}
          </div>
          <BookForm />
        </div>
      </div>
    </>
  );
};

export default TruckInfo;
