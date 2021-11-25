import React from 'react';
import img from '../../Assets/Img.png';
import Contact from '../Contact';

import {useMediaQuery} from '../../Hooks/useMediaQuery';

import styles from './styles.module.scss';

const About = () => {
  const breakpoint = useMediaQuery ('(max-width: 1000px)');

  return (
    <div className={styles.container}>
      <div className={styles.imgDesktop}>
        {breakpoint ? null : <Contact />}
        <img src={img} alt="Mauro" />
      </div>
      <h2>
        ¡Hola! Soy Mauro,
        <br />
        Frontend developer y
        <br />
        Diseñador gráfico 🎨
      </h2>
    </div>
  );
};

export default About;
