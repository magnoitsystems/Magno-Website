import Services from "./components/servicesSection/services";
import NavBar from "@/app/[locale]/components/navBar/navBar";

export default function HomePage() {
  return (
    <main>
        <div>
            <NavBar/>
        </div>
       <Services></Services>
    </main>
  );
}

