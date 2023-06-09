import React from 'react';
import styles from './botaoPrincipal.module.css';

const BotaoPrincipal = ({children, tamanho}) => {
  return (
    <button 
        className={`${styles.botaoPrincipal}
        ${styles[tamanho]}
    `}>
        {children}
    </button>
  )
}

export default BotaoPrincipal