import utilStyles from "../styles/utils.module.scss";
import cn from "classnames";
import styles from "./Button/Button.module.scss";

export default function Headline({subTitle, title, size}) {
    return (
        <h1
            className={
                size ?
                    `${cn({[utilStyles.headingLg]: size === 'large'})}` :
                    `${utilStyles.headingXl}`
            }>
            <span>{subTitle}</span>
            <br/>{title}
        </h1>
    )
}


