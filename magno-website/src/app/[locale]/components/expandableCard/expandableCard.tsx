"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import styles from "./expandableCard.module.css";

export default function ExpandableCards() {
  const t = useTranslations("services");
  const cards = t.raw("cards") as { title: string; description: string }[];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const ArrowDown = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      className={styles.icon}
    >
      <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
    </svg>
  );

  const ArrowUp = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      className={styles.icon}
    >
      <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
    </svg>
  );

  return (
    <div className={styles.cardsContainer}>
      {cards.map((card, index) => (
        <div key={index} className={styles.card}>
          <button
            className={`${styles.cardHeader} ${
              openIndex === index ? styles.active : ""
            }`}
            onClick={() => toggleCard(index)}
          >
            <span>{card.title}</span>
            {openIndex === index ? <ArrowUp /> : <ArrowDown />}
          </button>
          {openIndex === index && (
            <div className={styles.cardContent}>
              <p>{card.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
