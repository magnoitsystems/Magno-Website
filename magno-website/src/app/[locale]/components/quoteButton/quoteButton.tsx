import styles from './quoteButton.module.css';
import {openSans} from '@/app/ui/fonts';

export default function QuoteButton() {
    return (
        <button className={`${styles.main} ${openSans.className}`}>
            <h5>QUOTE MY WEBSITE</h5>
        </button>
    )
}