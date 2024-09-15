import css from "./ReviewList.module.css";
import ReviewComment from "../ReviewComment/ReviewComment.jsx";

export default function ReviewList({ reviews }) {
  return (
    <div className={css.container}>
      {reviews.map((item, index) => (
        <ReviewComment review={item} key={index} />
      ))}
    </div>
  );
}
