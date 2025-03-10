import styles from "./Features.module.css";

const Features = () => {
  return (
    <section className={styles.features}>
      <h2 className={styles.title}>WHY CHOOSE IQRAA?</h2>
      <div className={styles.grid}>
        <div className={styles.feature}>
          <img src="src\assets\fire.png" alt="Wide Range of Courses" className={styles.image} />
          <h3 className={styles.heading}>Wide Range of Courses</h3>
          <p className={styles.text}>From tech to business, find the right course for you.</p>
        </div>
        <div className={styles.feature}>
          <img src="https://placehold.co/600x400" alt="Learn at Your Pace" className={styles.image} />
          <h3 className={styles.heading}>Learn at Your Pace</h3>
          <p className={styles.text}>Access courses anytime, anywhere.</p>
        </div>
        <div className={styles.feature}>
          <img src="https://placehold.co/600x400" alt="Expert Instructors" className={styles.image} />
          <h3 className={styles.heading}>Expert Instructors</h3>
          <p className={styles.text}>Learn from industry professionals.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
