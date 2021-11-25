import React from 'react';
import styles from './styles.module.scss';
import {Tecnologias} from './Tecnologias';
import {Fragment} from 'react';

const Techs = () => {
  return (
    <div>
      <div className={styles.title}>
        <h4>Stack Tecnológico</h4>
        <div className={styles.tech}>
          {Tecnologias.map (({img, desc}, key) => (
            <Fragment key={key}> {img} </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Techs;
