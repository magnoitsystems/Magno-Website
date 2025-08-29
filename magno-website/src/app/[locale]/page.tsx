import Services from "./components/servicesSection/services";
import NavBar from "@/app/[locale]/components/navBar/navBar";
import PortfolioProjects from "./components/portfolio/portfolioProjects";
import WelcomeSection from "@/components/welcomeSection/welcomeSection";

export default function HomePage() {
  return (
    <main>
        <div>
            <NavBar/>
        </div>
        <WelcomeSection/>
       <Services></Services>
       <PortfolioProjects></PortfolioProjects>
    </main>
  );
}

