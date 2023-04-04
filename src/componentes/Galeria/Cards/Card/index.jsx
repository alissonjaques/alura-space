import { AiFillHeart } from 'react-icons/ai';
import open from './open.png';

export default function Card({foto , styles, aoFavoritar}) {
  function favoritar() {
    aoFavoritar(foto.id);
  }

  const propsfavorito = {
    size: 25,
    onClick: favoritar,
  };

  return (
    <li key={foto.id} className={styles.galeria__card}>
      <img
        className={styles.galeria__imagem}
        src={foto.imagem}
        alt={foto.titulo}
      />
      <p className={styles.galeria__descricao}>{foto.titulo}</p>
      <div>
        <p>{foto.creditos}</p>
        <span>
          {foto.favorito ? (
            <AiFillHeart onClick={favoritar} {...propsfavorito} color="red" />
          ) : (
            <AiFillHeart onClick={favoritar} {...propsfavorito} color="white" />
          )}
          <img src={open} alt="ícone de abrir modal" />
        </span>
      </div>
    </li>
  )
}
