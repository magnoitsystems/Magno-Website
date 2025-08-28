import styles from './footer.module.css';
import Image from 'next/image';
import QuoteButton from "@/app/[locale]/components/quoteButton/quoteButton";
import {openSans} from '@/app/ui/fonts';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <Image
                    src={'/logos/verticalWhite.png'}
                    alt={'Magno´s vertical logo'}
                    width={156}
                    height={160}
                />
            </div>

            <div className={`${styles.info} ${openSans.className}`}>
                <h2>Web development and design company. We'll help you make the digital leap.</h2>
                <QuoteButton/>
            </div>
        </footer>
    )
}