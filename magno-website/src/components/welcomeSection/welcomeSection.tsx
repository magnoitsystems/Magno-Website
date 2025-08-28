import Form from '@/components/form/form';
import styles from './welcomeSection.module.css'

export default function WelcomeSection(){
    return(
        <section>
            <div className={styles.titleProperties}>
                <h1> Nosotros te acompañamos en el salto <span>digital</span> </h1>
                <span> Invertí en nosotros, invertí en tu aplicación </span>
            </div>
            <div>
                <Form/>
            </div>
        </section>
    );
}