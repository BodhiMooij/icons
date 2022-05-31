import Headline from "./Headline";
import styles from "./Hero.module.scss"

export default function Hero({subTitle, title, text}) {
    return (
        <div className={styles.Wrapper}>
            <Headline subTitle={subTitle} title={title}/>
            <p className={styles.Text}>{text}</p>

            <div className="CallToAction">
            </div>
        </div>
    )
}