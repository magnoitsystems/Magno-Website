"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import styles from "./expandableCard.module.css";

export default function ExpandableCards() {
  const t = useTranslations("services");
  const cards = t.raw("cards") as { title: string; description: string }[];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const toggleCard = (index: number) =>
    setOpenIndex(prev => (prev === index ? null : index));

  const ArrowDown = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className={styles.icon}>
      <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
    </svg>
  );
  const ArrowUp = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className={styles.icon}>
      <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
    </svg>
  );

  return (
    <div className={styles.cardsContainer}>
      {cards.map((card, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`${styles.card} ${isOpen ? styles.open : ""}`}
            onMouseEnter={() => !isMobile && setOpenIndex(index)}
            onMouseLeave={() => !isMobile && setOpenIndex(null)}
          >
            <button
              className={styles.cardHeader}
              onClick={() => isMobile && toggleCard(index)}
              aria-expanded={isOpen}
              aria-controls={`card-content-${index}`}
            >
              <span>{card.title}</span>
              {isMobile && (
                <span className={styles.arrow}>
                  {isOpen ? <ArrowUp /> : <ArrowDown />}
                </span>
              )}
            </button>

            <div
              id={`card-content-${index}`}
              className={`${styles.cardContent} ${isOpen ? styles.show : ""}`}
            >
              <p>{card.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
