"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
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

  return (
    <section className={styles.portfolioContainer}>
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
        
        <div className={styles.portfolioText}>
          <h2>{t("title")}</h2>
          <p>{t("description")}</p>
        </div>
      </div>
    </section>
  );
}