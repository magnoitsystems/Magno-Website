import Form from '@/app/[locale]/components/form/form';
import styles from './welcomeSection.module.css'

export default function WelcomeSection(){
    return(
        <section className={styles.welcomeSection}>
            <div className={styles.titleProperties}>
                <h1> We accompany you in the <span>digital</span> leap </h1>
                <span> You invested in us, you invested in your app </span>
            </div>
            <div>
                <Form/>
            </div>
        </section>
    );
}