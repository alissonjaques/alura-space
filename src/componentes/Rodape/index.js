import React from 'react';
import facebook from './facebook.svg';
import instagram from './instagram.svg';
import styles from './Rodape.module.scss';
import twitter from './twitter.svg';

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape__icones}>
        <a href="https://www.facebook.com/alisson.jaques.79" target="_blank" rel="noreferrer">
          <img src={facebook} alt="ícone do facebook" />
        </a>
        <a href="https://twitter.com/aluraonline?lang=en" target="_blank" rel="noreferrer">
          <img src={twitter} alt="ícone do twitter" />
        </a>
        <a href="https://www.instagram.com/alisson__jaques/?hl=en" target="_blank" rel="noreferrer">
          <img src={instagram} alt="ícone do instagram" />
        </a>
      </div>
      <p>Desenvolvido por Alisson Jaques</p>
    </footer>
  );
}
