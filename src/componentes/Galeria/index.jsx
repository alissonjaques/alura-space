import React from 'react'
import Tags from '../Tags'
import Cards from './Cards'
import fotos from './fotos.json'
import styles from './Galeria.module.scss'

export default function Galeria() {
  return (
    <section className={styles.galeria}>
        <h2>Navegue pela galeria</h2>
        <Tags/>
        <Cards fotos={fotos} styles={styles} />
    </section>
  )
}
