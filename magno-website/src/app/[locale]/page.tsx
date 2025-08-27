// import MagnoDefinition from "@/components/magnoDefinition/magnoDefinition";
// import styles from "./page.module.css";
// import NavBar from "@/components/navBar/navBar";

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

import {useTranslations} from 'next-intl';
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return <h1>{t('title')}</h1>;
}

