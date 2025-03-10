import React, { useState } from 'react';
import styles from './Courses.module.css';

const categories = [
  'All',
  'Web Development',
  'Programming',
  'Design',
  'Data Science',
  'Mobile Development',
  'Security'
];

const courses = [
  {
    title: 'Introduction to React',
    instructor: 'Jane Doe',
    image: 'https://placehold.co/1920x1080',
    description: 'Learn the basics of React and build your first app.',
    duration: '4 weeks',
    category: 'Web Development',
    tags: ['Advanced'],
    place: 'ONLINE',
    rating: 4,
    ratedBy: 150,
    price: 'Free !'
  },
  {
    title: 'Advanced JavaScript Techniques',
    instructor: 'John Smith',
    image: 'https://placehold.co/1920x1080',
    description: 'Master advanced JavaScript concepts and patterns.',
    duration: '6 weeks',
    category: 'Programming',
    tags: ['Advanced'],
    place: 'PRESENTIEL',
    rating: 0,
    ratedBy: 0,
    price: '99 DT'
  },
  {
    title: 'UI/UX Design Fundamentals',
    instructor: 'Alice Johnson',
    image: 'https://placehold.co/1920x1080',
    description: 'Discover the principles of great user interface design.',
    duration: '5 weeks',
    category: 'Design',
    tags: ['Beginner'],
    place: 'ONLINE/PRESENTIEL',
    rating: 3,
    ratedBy: 90,
    price: '49 dt'
  },
  {
    title: 'Data Science with Python',
    instructor: 'Bob Wilson',
    image: 'https://placehold.co/1920x1080',
    description: 'Explore data analysis and machine learning with Python.',
    duration: '8 weeks',
    category: 'Data Science',
    tags: ['Intermediate'],
    place: 'ONLINE',
    rating: 5,
    ratedBy: 300,
    price: 'Free !'
  }
];

function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCourses = selectedCategory === 'All'
    ? courses
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className={styles.coursesContainer}>
      <h1 className={styles.btitle}>CLASSE VIRTUEL</h1>
      <div className={styles.categories}>
        {categories.map(category => (
          <button
            key={category}
            className={`${styles.categoriesButton} ${selectedCategory === category ? styles.active : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className={styles.wrapper}>
        <div className={styles.coursesList}>
          {filteredCourses.map((course, index) => (
            <div key={index} className={styles.courseCard}>
              <p className={styles.place}>{course.place}</p>
              <h2 className={styles.title}>{course.title}</h2>
              <div className={styles.instructorContainer}>
                <p className={styles.instructor}>{course.instructor}</p>
                <p className={styles.stars}>{'★'.repeat(course.rating) + '☆'.repeat(5 - course.rating)}<span className={styles.nrate}> ({course.ratedBy})</span></p>
              </div>
              <img src={course.image} alt="" className={styles.instructorImage} />
              <p className={styles.description}>{course.description}</p>
              <div className={styles.durcat}><p>{course.duration}  </p><p>{course.category}</p></div>
              <div className={styles.tags}>
                {course.tags.map((tag, i) => (
                  <span key={i} className={styles.tag}>{tag}</span>
                ))}
                <span className={styles.price}>{course.price}</span>
              </div>
              <button className={styles.enrollBtn}>View Details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
