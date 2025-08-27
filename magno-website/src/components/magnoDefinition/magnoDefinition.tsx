'use client';
import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './magnoDefinition.module.css';

const MagnoDefinition = () => {
  const t = useTranslations('magno');

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* Logo y título */}
        <div className={styles.logoSection}>
          <div className={styles.logoContainer}>
            <Image
              src="/logos/lion.png"
              alt="Magno Logo"
              width={60}
              height={60}
              className={styles.logo}
            />
            <h1 className={styles.title}>{t('title')}</h1>
          </div>
          
          <div className={styles.definition}>
            <p className={styles.definitionText}>
              <span className={styles.label}>{t('definition.label')}</span>
            </p>
            <p className={styles.definitionText}>
              <span className={styles.bold}>{t('definition.meaning')}</span>
            </p>
          </div>
        </div>

        {/* Descripción */}
        <div className={styles.descriptionSection}>
          <p className={styles.description}>
            {t('description.intro')}
          </p>
          
          <p className={styles.mainDescription}>
            {t.rich('description.main', {
              superar: (chunks) => <span className={styles.highlight}>{t('description.superar')}</span>,
              destacar: (chunks) => <span className={styles.highlight}>{t('description.destacar')}</span>,
              altura: (chunks) => <span className={styles.highlight}>{t('description.altura')}</span>,
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MagnoDefinition;