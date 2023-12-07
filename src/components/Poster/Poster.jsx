import styles from "../../styles/Home.module.css";
import bg from "../../images/computer.png";

const Poster = () => {
  return (
    <section className={styles.home}>
      <h2 className={styles.title}>BIG SALE 20%</h2>
      <div className={styles.product}>
        <div className={styles.text}>
          <p className={styles.subtitle}>the bestseller of 2012</p>
          <h1 className={styles.head}>LENNON r2d2 with NVIDIA 5090 TI</h1>
          <button className={styles.button}>Shop now</button>
        </div>
        <div className={styles.image}>
          <img src={bg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Poster;
