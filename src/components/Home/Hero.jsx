import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.leftContent}>
        <img src="src\assets\logo.png" alt="Placeholder" className={styles.smallImage} />
        <h1>LEARN - GROW - SUCCEED</h1>
        <div className={styles.buttons}>
          <button className={styles.primary}>Start Learning</button>
          <button className={styles.secondary}>Upload a Course</button>
        </div>
      </div>
      <div className={styles.rightContent}>
        <img src="https://placehold.co/600x400" alt="Placeholder" className={styles.largeImage} />
      </div>
    </section>
  );
};

export default Hero;
