import React from 'react';
import {Contacts} from './Contacts'

import styles from './styles.module.scss';

const Contact = () => {
  return (
    <div className={styles.container}>
      {Contacts.map (({link, svg}) => (
        <a href={link} target="_blank" rel="noreferrer">
          {svg}
        </a>
      ))}
    </div>
  );
};

export default Contact;
