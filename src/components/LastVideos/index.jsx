import React from 'react';
import Cards from './components/Cards';
import styles from './styles.module.scss';

const LastVideos = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h4>Últimos Videos</h4>
      </div>
      <Cards />
    </div>
  );
};

export default LastVideos;
