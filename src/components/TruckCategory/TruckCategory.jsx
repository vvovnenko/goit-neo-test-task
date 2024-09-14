import css from "./TruckCategory.module.css";
const TruckCategory = ({ name, children }) => {
  return (
    <div className={css.category}>
      {children}
      <span className={css.categoryName}>{name}</span>
    </div>
  );
};

export default TruckCategory;
