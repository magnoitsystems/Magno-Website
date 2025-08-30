import Services from "./components/servicesSection/services";
import NavBar from "@/app/[locale]/components/navBar/navBar";
import PortfolioProjects from "./components/portfolio/portfolioProjects";
import WelcomeSection from "@/app/[locale]/components/welcomeSection/welcomeSection";
import styles from './page.module.css';

export default function HomePage() {
  return (
    <main className={styles.main}>
        <div>
            <NavBar/>
        </div>

        <WelcomeSection/>

        <div className={styles.logoContainer}>
            <Services></Services>
            <PortfolioProjects></PortfolioProjects>
        </div>
    </main>
  );
}

