import styles from "./CTA.module.css";

const CTA = () => {
  return (
    <section className={styles.cta}>
      <h2>Join Iqraa Today!</h2>
      <p>Start learning with top courses now.</p>
      <button className={styles.button}>Get Started</button>
    </section>
  );
};

export default CTA;
