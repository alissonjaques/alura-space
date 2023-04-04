import { useState } from 'react';
import Tags from '../Tags';
import Cards from './Cards';
import styles from './Galeria.module.scss';
import fotos from './fotos.json';

export default function Galeria() {
  const [itens, setItens] = useState(fotos);
  const tags = [...new Set(fotos.map((foto) => foto.tag))];
  const filtrarFotos = (tag) => {
    const novasFotos = fotos.filter((foto) => foto.tag === tag);
    setItens(novasFotos);
  }

  function resolverFavorito(id) {
    setItens(
      fotos.map((foto) => {
        if (foto.id === id) foto.favorito = !foto.favorito;
        return foto;
      })
    );
  }
  
  return (
    <section className={styles.galeria}>
        <h2>Navegue pela galeria</h2>
        <Tags tags={tags} filtrarFotos={filtrarFotos} setItens={setItens}/>
        <Cards fotos={itens} styles={styles} aoFavoritar={resolverFavorito}/>
    </section>
  )
}
