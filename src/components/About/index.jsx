import React from 'react';
import img from '../../Assets/Img.png'
import styles from './styles.module.scss'

const About = () => {
  return (
    <div className={styles.container}>
      <img src={img} alt="Mauro" />
      <h2>¡Hola! Soy Mauro, Frontend developer y Diseñador gráfico 🎨</h2>
    </div>
  );
};

export default About;
