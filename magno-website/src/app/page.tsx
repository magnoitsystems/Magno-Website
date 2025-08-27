import MagnoDefinition from "@/components/magnoDefinition/magnoDefinition";
import styles from "./page.module.css";
import NavBar from "@/components/navBar/navBar";

export default function Home() {
  return (
    <main className={styles.page}>
      <div>
        <NavBar/>
      </div>
      <div>
        <MagnoDefinition></MagnoDefinition>
      </div>
    </main>
  );
}
