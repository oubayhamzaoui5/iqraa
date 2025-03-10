import React from 'react';
import styles from './VideoList.module.css';

const videos = [
  { id: 1, title: 'Introduction', duration: '5:00',parent_id: 1 },
  { id: 2, title: 'Lesson 1', duration: '15:00',parent_id: 1 },
  { id: 3, title: 'Lesson 2', duration: '12:30',parent_id: 1 },
  { id: 3, title: 'Lesson 2', duration: '12:30' ,parent_id: 1},
  { id: 3, title: 'Lesson 2', duration: '12:30' ,parent_id: 1},
  { id: 3, title: 'Lesson 2', duration: '12:30' ,parent_id: 1},
  { id: 3, title: 'Lesson 2', duration: '12:30' ,parent_id: 1},
  { id: 3, title: 'Lesson 2', duration: '12:30' ,parent_id: 2},
  { id: 3, title: 'Lesson 2', duration: '12:30' ,parent_id: 2},
  { id: 3, title: 'Lesson 2', duration: '12:30' ,parent_id: 2},
  { id: 3, title: 'Lesson 2', duration: '12:30' ,parent_id: 2},
  { id: 3, title: 'Lesson 2', duration: '12:30',parent_id: 2 },
  { id: 3, title: 'Lesson 2', duration: '12:30',parent_id: 2 },
  { id: 3, title: 'Lesson 2', duration: '12:30' ,parent_id: 2},
  { id: 3, title: 'Lesson 2', duration: '12:30' ,parent_id: 2},
  { id: 3, title: 'Lesson 2', duration: '12:30',parent_id: 3 },
  { id: 3, title: 'Lesson 2', duration: '12:30',parent_id: 3 },
  { id: 3, title: 'Lesson 2', duration: '12:30' ,parent_id: 3},
  { id: 3, title: 'Lesson 2', duration: '12:30' ,parent_id: 3},
  { id: 3, title: 'Lesson 2', duration: '12:30',parent_id: 3 },
  { id: 3, title: 'Lesson 2', duration: '12:30',parent_id: 4 },
  { id: 3, title: 'Lesson 2', duration: '12:30',parent_id: 4 },
  { id: 3, title: 'Lesson 2', duration: '12:30',parent_id: 4 },
  { id: 3, title: 'Lesson 2', duration: '12:30' ,parent_id: 4},
  { id: 3, title: 'Lesson 2', duration: '12:30',parent_id: 4 },
  { id: 3, title: 'Lesson 2', duration: '12:30' ,parent_id: 4},
];

const categories = [
  {id : 1 , title: "Introduction"},
  {id : 2 , title: "categorie 1"},
  {id : 3 , title: "categorie 2"},
  {id : 4 , title: "categorie 3"},

];

const VideoList = () => {
  return (
    <div className={styles.videoListContainer}>
      <ul className={styles.videoList}>
      {categories.map((categorie) => (
  <div key={categorie.id}>
    <h3>{categorie.title}</h3>
    <ul>
      {videos
        .filter((video) => video.parent_id === categorie.id)
        .map((video) => (
          <li key={video.id} className={styles.videoItem}>
            <span className={styles.RadioContainer}><input type="radio" />&nbsp;{video.title}</span>
            <span>{video.duration}</span>
          </li>
        ))}
    </ul>
  </div>
))}

      </ul>
    </div>
  );
};

export default VideoList;
