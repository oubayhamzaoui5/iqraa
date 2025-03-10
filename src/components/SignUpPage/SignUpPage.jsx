import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import styles from './SignUpPage.module.css';

const SignUpPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.optionsContainer}>
        <div className={styles.optionBox} onClick={() => navigate('/signup/instructor')}>
          <FontAwesomeIcon icon={faChalkboardTeacher} className={styles.icon} />
          <h3 className={styles.title}>I am an Instructor</h3>
          <p className={styles.description}>Create and sell your courses</p>
        </div>
        <div className={styles.optionBox} onClick={() => navigate('/signup/student')}>
          <FontAwesomeIcon icon={faUserGraduate} className={styles.icon} />
          <h3 className={styles.title}>I am a Student</h3>
          <p className={styles.description}>Learn and grow your skills</p>
        </div>
      </div>
      <p className={styles.signInText}>
        Already have an account? <span className={styles.signInLink} onClick={() => navigate('/signin')}>Sign In</span>
      </p>
    </div>
  );
};

export default SignUpPage;
