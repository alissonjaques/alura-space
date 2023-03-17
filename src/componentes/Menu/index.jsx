import React from 'react';
import icones from './icones.json';
import styles from './Menu.module.scss';

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        {icones.map((icone)=>{ 
          return (
            <li className={styles.menu__item}>
              <img src={icone.imagem} alt={icone.descricao} />
              <a href="/">{icone.titulo}</a>
            </li>)
          })
        }
      </ul>
    </nav>
  );
}
