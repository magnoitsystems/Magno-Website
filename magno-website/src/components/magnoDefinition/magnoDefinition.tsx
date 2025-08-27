import React from 'react';
import Image from 'next/image';
import styles from './magnoDefinition.module.css';

const MagnoDefinition = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* Logo y título */}
        <div className={styles.logoSection}>
          <div className={styles.logoContainer}>
            <Image
              src="/logos/lion.png"
              alt="Magno Logo"
              width={40}
              height={40}
              className={styles.logo}
            />
            <h1 className={styles.title}>MAGNO</h1>
          </div>
          
          <div className={styles.definition}>
            <p className={styles.definitionText}>
              <span className={styles.label}>(Adjetivo)</span>
            </p>
            <p className={styles.definitionText}>
              <span className={styles.bold}>grande</span> (ll que supera a lo común).
            </p>
          </div>
        </div>

        {/* Descripción */}
        <div className={styles.descriptionSection}>
          <p className={styles.description}>
            Y eso es lo que buscamos en cada proyecto:
          </p>
          
          <p className={styles.mainDescription}>
            <span className={styles.highlight}>Superar</span> lo común,{' '}
            <span className={styles.highlight}>destacar</span> en cada detalle, y entregar un trabajo a la{' '}
            <span className={styles.highlight}>altura</span> de su nombre.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MagnoDefinition;