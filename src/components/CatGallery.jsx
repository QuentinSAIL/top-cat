import React from 'react';
import styles from '../styles/CatGallery.module.css';

function CatGallery({ cats, catScores }) {
  return (
    <div className={styles.gallery}>
      <h2 className={styles.title}>Galerie des Chats</h2>
      <div className={styles.grid}>
        {cats.map(cat => (
          <div key={cat.id} className={styles.card}>
            <img src={cat.image} alt={cat.name} className={styles.image} />
            <div className={styles.info}>
              <h3 className={styles.name}>{cat.name}</h3>
              <p className={styles.description}>
                Matchs gagnés : {catScores[cat.id] || 0}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CatGallery; 