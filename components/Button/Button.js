import styles from './Button.module.scss';
import cn from 'classnames';

export const Button = ({
                           buttonText,
                           type,
                           buttonUrl,
                           ...restProps
                       }) => {
    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                buttonUrl ? window.open(buttonUrl, '_blank') : null;
            }}
            // className={
            // type ?
            // `${styles.Button} ${styles[buttonVariant]}` :
            // styles.Button} {...restProps}>
            className={
                type ?
                    `${cn({[styles.secondary]: type === 'secondary'})}` :
                    `${styles.default}`
            }
        >

            {buttonText}
        </button>
    )

}