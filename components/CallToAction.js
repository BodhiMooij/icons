import styles from "./CallToAction.module.scss";
import { Button } from "./Button";

export default function CallToAction() {
    return (
        <div className={styles.CallToAction}>
            <Button buttonText="Reee" buttonUrl="https://bodhimooij.com"/>
            <Button type="secondary" buttonText="Yeet"/>
        </div>
    )
}