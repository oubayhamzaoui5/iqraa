import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import styles from './Navbar.module.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
      <Link to="/"><div className={styles.logo}>
         PLATFORM.TN
        </div></Link>
        <ul className={styles.navLinks}>
        <Link to="/courses"><li className={`${styles.navItem} ${location.pathname === '/courses' ? styles.active : ''}`}>
            Bootcamps
          </li></Link>
          <Link to="/video">  <li className={`${styles.navItem} ${location.pathname === '/video' ? styles.active : ''}`}>
            Recorded Courses
          </li></Link>
          <Link to="/educational-system"><li className={`${styles.navItem} ${location.pathname === '/educational-system' ? styles.active : ''}`}>
          Educational System
          </li></Link>
          <Link to="/membership"> <li className={`${styles.navItem} ${location.pathname === '/membership' ? styles.active : ''}`}>
           Membership
          </li></Link>
        </ul>
      </div>

      <div className={styles.navbarRight}>
        <div className={styles.language}>
        <FontAwesomeIcon icon={faGlobe} className={styles.icon} />
        <p className={styles.languagetxt}>EN</p>
        </div>
        <Link to="/SignUp"> <button className={styles.signInBtn}>SIGN IN</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;
