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
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <a key={project.id} href={project.url} className={styles.projectItem}>
            <Image
              src={project.image}
              alt={project.id}
              width={600}
              height={400}
              className={styles.projectItem}
            />
            <div className={styles.overlay} />
            <Image
              src={project.logo}
              alt={`${project.id}-logo`}
              width={150}
              height={150}
              className={styles.projectLogo}
            />
          </a>
        ))}
      </div>
      <div className={styles.portfolioText}>
        <h2>{t("title")}</h2>
        <p>{t("description")}</p>
      </div>
    </section>
  );
}
