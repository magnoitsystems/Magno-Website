"use client";

import MagnoDefinition from "../magnoDefinition/magnoDefinition";
import ExpandableCards from "../expandableCard/expandableCard";
import styles from "./services.module.css";

export default function Services() {
  return (
    <section className={styles.container}>
      <MagnoDefinition />
      <ExpandableCards />
    </section>
  );
}
