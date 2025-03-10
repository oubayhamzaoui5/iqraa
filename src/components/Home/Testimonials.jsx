import styles from "./Testimonials.module.css";

const testimonialsData = [
  {
    quote: "Iqraa transformed the way I learn! Highly recommended.",
    image: "https://placehold.co/400x400",
    name: "Sarah B.",
    job: "Software Engineer"
  },
  {
    quote: "The best platform for skill improvement!",
    image: "https://placehold.co/400x400",
    name: "Ahmed K.",
    job: "Marketing Specialist"
  },
  {
    quote: "An essential tool for career growth!",
    image: "https://placehold.co/400x400",
    name: "Lisa M.",
    job: "Data Analyst"
  }
];

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.testimonialsGrid}>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className={styles.testimonialCard}>
            <div className={styles.profile}>
              <img src={testimonial.image} alt={testimonial.name} className={styles.image} />
              <div>
                <span className={styles.name}>{testimonial.name}</span>
                <p className={styles.quote}>&ldquo;{testimonial.quote}&rdquo;</p>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
