import React from 'react'
import styles from './Post.module.css';
import { Link } from 'react-router-dom';
import BotaoPrincipal from 'componentes/BotaoPrincipal';

const PostCard = ({post}) => {
  return (
    <Link to={`post/${post.id}`}>
      <div className={styles.post}>
        <img 
            className={styles.capa} 
            src={`assets/posts/${post.id}/capa.png`} 
            alt="Imagem da Capa" 
        />
        <h2 className={styles.titulo}>{post.titulo}</h2>

        <BotaoPrincipal>Ler</BotaoPrincipal>
      </div>
    </Link>
    
  )
}

export default PostCard