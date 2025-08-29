"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import styles from './portfolioProjects.module.css';

interface Project {
  id: string;
  image: string;
  logo: string;
  url: string;
}

const projects: Project[] = [
  {
    id: "agapanthus",
    image: "/portfolio/agapanthus.png",
    logo: "/portfolio/agapanthusLogo.png",
    url: "https://agapanthus-departments.vercel.app/",
  },
  {
    id: "flora",
    image: "/portfolio/flora.png",
    logo: "/portfolio/floraLogo.png",
    url: "https://flora-cordeiro-inmobiliaria.vercel.app/",
  },
  {
    id: "jornadas",
    image: "/portfolio/jornadas.png",
    logo: "/portfolio/jornadasLogo.png",
    url: "https://www.jornadasinterhospitalariastandil.com/",
  },
];

export default function PortfolioProjects() {
  const t = useTranslations("Portfolio");
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className={styles.portfolioContainer}>
      {/* Texto arriba en mobile */}
      <div className={styles.portfolioText}>
        <h2>{t("title")}</h2>
        <p>{t("description")}</p>
      </div>

      {/* Carrusel para mobile */}
      <div className={styles.mobileCarousel}>
        <button 
          className={`${styles.carouselButton} ${styles.prevButton}`}
          onClick={prevSlide}
          aria-label="Proyecto anterior"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
            <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/>
          </svg>
        </button>
        
        <div className={styles.carouselContainer}>
          <div 
            className={styles.carouselTrack}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={project.id} className={styles.carouselSlide}>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.projectItem}
                >
                  <Image
                    src={project.image}
                    alt={project.id}
                    width={350}
                    height={233}
                    className={styles.projectImage}
                  />
                  <div className={styles.overlay} />
                  <Image
                    src={project.logo}
                    alt={`${project.id}-logo`}
                    width={100}
                    height={100}
                    className={styles.projectLogo}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        <button 
          className={`${styles.carouselButton} ${styles.nextButton}`}
          onClick={nextSlide}
          aria-label="Siguiente proyecto"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
          </svg>
        </button>
      </div>

      {/* Indicadores de slide */}
      <div className={styles.slideIndicators}>
        {projects.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentSlide ? styles.activeIndicator : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ir al proyecto ${index + 1}`}
          />
        ))}
      </div>

      {/* Layout de escritorio (hidden en mobile) */}
      <div className={styles.desktopLayout}>
        {/* Primeras dos cards arriba */}
        <div className={styles.topProjectsGrid}>
          {projects.slice(0, 2).map((project) => (
            <a key={project.id} href={project.url} target="_blank" rel="noopener noreferrer" className={styles.projectItem}>
              <Image
                src={project.image}
                alt={project.id}
                width={500}
                height={333}
                className={styles.projectImage}
              />
              <div className={styles.overlay} />
              <Image
                src={project.logo}
                alt={`${project.id}-logo`}
                width={120}
                height={120}
                className={styles.projectLogo}
              />
            </a>
          ))}
        </div>

        {/* Tercera card y texto lado a lado */}
        <div className={styles.bottomSection}>
          <a href={projects[2].url} target="_blank" rel="noopener noreferrer" className={styles.projectItem}>
            <Image
              src={projects[2].image}
              alt={projects[2].id}
              width={500}
              height={333}
              className={styles.projectImage}
            />
            <div className={styles.overlay} />
            <Image
              src={projects[2].logo}
              alt={`${projects[2].id}-logo`}
              width={120}
              height={120}
              className={styles.projectLogo}
            />
          </a>
          
          <div className={styles.portfolioTextDesktop}>
            <h2>{t("title")}</h2>
            <p>{t("description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}