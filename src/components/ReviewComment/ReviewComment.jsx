import ReviewStars from "../ReviewStars/ReviewStars.jsx";
import css from "./ReviewComment.module.css";

export default function ReviewComment({ review }) {
  return (
    <div className={css.container}>
      <div className={css.personWrapper}>
        <div className={css.avatar}>
          {review.reviewer_name.charAt(0).toUpperCase()}
        </div>
        <div className={css.person}>
          <p className={css.name}>{review.reviewer_name}</p>
          <ReviewStars count={review.reviewer_rating} />
        </div>
      </div>
      <p className={css.comment}>{review.comment}</p>
    </div>
  );
}
