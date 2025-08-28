// import MagnoDefinition from "@/components/magnoDefinition/magnoDefinition";
// import styles from "./page.module.css";
// import NavBar from "@/components/navBar/navBar";

import MagnoDefinition from "./components/magnoDefinition/magnoDefinition";
import NavBar from "@/app/[locale]/components/navBar/navBar";
import Footer from "@/app/[locale]/components/footer/footer";


// export default function Home() {
//   return (
//     <main className={styles.page}>
//       <div>
//         <NavBar/>
//       </div>
//       <div>
//         <MagnoDefinition></MagnoDefinition>
//       </div>
//     </main>
//   );
// }

export default function HomePage() {
  return (
    <main>
        <div>
            <NavBar/>
        </div>
        <MagnoDefinition />
        <Footer/>
    </main>
  );
}

