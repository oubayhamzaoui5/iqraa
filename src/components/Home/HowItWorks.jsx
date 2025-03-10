import { useState, useEffect } from "react";
import styles from "./HowItWorks.module.css";

const steps = {
  student: [
    { title: "Browse Courses", desc: "Find courses that match your interests.", icon: "🔍" },
    { title: "Watch Lessons", desc: "Learn at your own pace with video lectures.", icon: "🎥" },
    { title: "Earn Certificates", desc: "Get certified and showcase your skills.", icon: "🏆" }
  ],
  instructor: [
    { title: "Upload Courses", desc: "Share your knowledge by uploading courses.", icon: "📤" },
    { title: "Engage Students", desc: "Track progress and interact with learners.", icon: "📊" },
    { title: "Earn Money", desc: "Monetize your courses and grow your reach.", icon: "💰" }
  ]
};

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState("student");
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => {
        if (prevStep + 1 >= steps[activeTab].length) {
          setActiveTab((prevTab) => (prevTab === "student" ? "instructor" : "student"));
          return 0; // Reset step
        }
        return prevStep + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <section className={styles.howItWorks}>
      {/* Tabs */}
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === "student" ? styles.active : ""}`}
          onClick={() => { setActiveTab("student"); setCurrentStep(0); }}
        >
          Student
        </button>
        <button
          className={`${styles.tab} ${activeTab === "instructor" ? styles.active : ""}`}
          onClick={() => { setActiveTab("instructor"); setCurrentStep(0); }}
        >
          Instructor
        </button>
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        {/* Left Side: Cards */}
        <div className={styles.cards}>
          {steps[activeTab].map((step, index) => (
          <div
          key={index}
          className={`${styles.card} ${index === currentStep ? styles.activeCard : ""}`}
        >
          <span className={styles.icon}>{step.icon}</span>
          <div className={styles.textContainer}>
            <h3 className={styles.titlec}>{step.title}</h3>
            {index === currentStep && <p className={styles.desc}>{step.desc}</p>}
          </div>
          </div>
          ))}
        </div>

        {/* Right Side: Video Placeholder */}
        <div className={styles.videoContainer}>
          <div className={styles.videoFrame}>
            <img src="https://via.placeholder.com/400x250" alt="Video Placeholder" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
