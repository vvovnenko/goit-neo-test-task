import css from "./TruckFeatures.module.css";
import TruckCategories from "../TruckCategories/TruckCategories.jsx";

export default function TruckFeatures({ data }) {
  return (
    <div className={css.container}>
      <TruckCategories data={data} />
      <div className={css.detailsContainer}>
        <h2 className={css.detailsTitle}>Vehicle details</h2>
        <ul className={css.detailsList}>
          <li className={css.detailsListItem}>
            <span className={css.detailsText}>Form</span>
            <span className={css.detailsText}>{data.form || "-"}</span>
          </li>
          <li className={css.detailsListItem}>
            <span className={css.detailsText}>Length</span>
            <span className={css.detailsText}>{data.length || "-"}</span>
          </li>
          <li className={css.detailsListItem}>
            <span className={css.detailsText}>Width</span>
            <span className={css.detailsText}>{data.width || "-"}</span>
          </li>
          <li className={css.detailsListItem}>
            <span className={css.detailsText}>Height</span>
            <span className={css.detailsText}>{data.height || "-"}</span>
          </li>
          <li className={css.detailsListItem}>
            <span className={css.detailsText}>Tank</span>
            <span className={css.detailsText}>{data.tank || "-"}</span>
          </li>
          <li className={css.detailsListItem}>
            <span className={css.detailsText}>Consumption</span>
            <span className={css.detailsText}>{data.consumption}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
