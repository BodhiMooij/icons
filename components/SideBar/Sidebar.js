import styles from "./Sidebar.module.scss";
import Headline from "../Headline";

export default function Sidebar() {
    return (
        <div className={styles.root}>
            <Headline subTitle="Shop" title="All Products" size="large"/>

            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
                <li>Item 6</li>
                <li>Item 7</li>
            </ul>
        </div>
    )
}