import styles from "./Home.module.css";
import Button from "../../components/Button/Button.jsx";

const Home = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Campers of your dreams</h1>
      <p className={styles.description}>
        You can find everything you want in our catalog
      </p>
      <Button link="/catalog">View Now</Button>
    </div>
  );
};

export default Home;
