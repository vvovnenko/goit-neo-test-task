import css from "./Home.module.css";
import Button from "../../components/Button/Button.jsx";

const Home = () => {
  return (
    <div className={css.hero}>
      <h1 className={css.title}>Campers of your dreams</h1>
      <p className={css.description}>
        You can find everything you want in our catalog
      </p>
      <Button link="/catalog">View Now</Button>
    </div>
  );
};

export default Home;
