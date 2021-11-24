import React from 'react';
import Buttons from '../Buttons';
import styles from './styles.module.scss';

const Card = ({video}) => {
  const {img, desc, ...rest} = video;

  return (
    <div className={styles.container}>
        <img src={img} alt={img} />
      <div className={styles.bottom}>
        <p>{desc}</p>
        <Buttons links={rest} />
      </div>
    </div>
  );
};

export default Card;
