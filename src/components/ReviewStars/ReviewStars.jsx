import css from "./ReviewStars.module.css";
import RatingPressedIcon from "../../icons/RatingPressedIcon.jsx";
import RatingIcon from "../../icons/RatingIcon.jsx";

export default function ReviewStars({ count }) {
  const icons = Array.from({ length: 5 }, (_, i) =>
    i < count ? RatingPressedIcon : RatingIcon,
  );

  return (
    <div className={css.container}>
      {icons.map((Icon, key) => (
        <Icon key={key} />
      ))}
    </div>
  );
}
