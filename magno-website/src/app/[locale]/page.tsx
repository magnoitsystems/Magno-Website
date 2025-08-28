import Services from "./components/servicesSection/services";
import NavBar from "@/app/[locale]/components/navBar/navBar";
import PortfolioProjects from "./components/portfolio/portfolioProjects";

export default function HomePage() {
  return (
    <main>
        <div>
            <NavBar/>
        </div>
       <Services></Services>
       <PortfolioProjects></PortfolioProjects>
    </main>
  );
}

