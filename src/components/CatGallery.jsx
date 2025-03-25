import React from 'react';
import styles from '../styles/CatGallery.module.css';

const CatGallery = ({ cats }) => {
  return (
    <div className={styles.gallery}>
      <h2 className={styles.title}>Cat Gallery</h2>
      <div className={styles.grid}>
        {cats.map((cat) => (
          <div key={cat.id} className={styles.card}>
            <img src={cat.image} alt={cat.name} className={styles.image} />
            <div className={styles.info}>
              <h3 className={styles.name}>{cat.name}</h3>
              <p className={styles.description}>{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatGallery; 