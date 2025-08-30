import styles from './form.module.css';
import {inter} from "@/app/ui/fonts";

export default function Form(){
    return (
        <form className={`${inter.className} ${styles.formProperties}`}>
            <div className={styles.labelsProperties}>
                <label>Name and lastname <input type="text" placeholder="Name and lastname" name="nameAndLastname" id="nameAndLastname"/></label>
                <label>What sector is the site geared towards? <input type="text" placeholder="What sector is the site geared towards?" name="sector" id="sector"/></label>
                <label>Name and lastname <input type="text" placeholder="Name and lastname" name="nameAndLastname" id="nameAndLastname"/></label>
                <label>Does it need auto-administration? <select name="autoadministration">
                    <option id="yes">Yes</option>
                    <option id="no">No</option>
                </select></label>
            </div>
            <button className={styles.buttonProperties}>Solicitar presupuesto</button>
        </form>
    );
}