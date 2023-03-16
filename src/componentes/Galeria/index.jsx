import React from 'react'
import Tags from '../Tags'
import favorito from './favorito.png'
import fotos from './fotos.json'
import styles from './Galeria.module.scss'
import open from './open.png'

export default function Galeria() {
  return (
    <section className={styles.galeria}>
        <h2>Navegue pela galeria</h2>
        <Tags/>
        <ul className={styles.galeria__cards}>
      {fotos.map((item) => {
        return (
          <li key={item.id} className={styles.galeria__card}>
            <img
              className={styles.galeria__imagem}
              src={item.imagem}
              alt={item.titulo}
            />
            <p className={styles.galeria__descricao}>{item.titulo}</p>
            <div>
              <p>{item.creditos}</p>
              <span>
                <img src={favorito} alt="ícone coração de curtir" />
                <img src={open} alt="ícone de abrir modal" />
              </span>
            </div>
          </li>
        );
      })}
    </ul>
    </section>
  )
}
