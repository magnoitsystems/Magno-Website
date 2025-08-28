import styles from "./page.module.css";
import NavBar from "@/components/navBar/navBar";
import WelcomeSection from "@/components/welcomeSection/welcomeSection";

export default function Home() {
  return (
    <main className={styles.page}>
      <div>
          <NavBar/>
          <WelcomeSection/>
      </div>
    </main>
  );
}
