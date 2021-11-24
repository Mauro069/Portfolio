import React from 'react';
import {Videos} from '../../Videos';
import Card from '../Card';
import styles from './styles.module.scss';

const Cards = () => {
  return (
    <div className={styles.cards}>
      {Videos.map (video => <Card video={video} />)}
    </div>
  );
};

export default Cards;
