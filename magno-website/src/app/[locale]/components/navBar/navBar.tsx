import styles from './navBar.module.css';
import Image from 'next/image';
import QuoteButton from "../quoteButton/quoteButton";
import {openSans} from '@/app/ui/fonts';

export default function NavBar() {
    return (
        <nav className={`${styles.main} ${openSans.className}`}>
            <div className={styles.logo}>
                <Image
                    src={'/logos/lion.png'}
                    alt={'lion image, so Magno´s logo'}
                    width={64}
                    height={65}
                />
                <Image
                    src={'/logos/letter.png'}
                    alt={'magno´s logo letters'}
                    width={110}
                    height={40}
                />
            </div>

            <div className={styles.sections}>
                <h5>Home</h5>
                <h5>Services</h5>
                <h5>Portfolio</h5>
            </div>

            <div>
                <QuoteButton/>
            </div>
        </nav>
    )
}