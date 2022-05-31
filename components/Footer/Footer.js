import styles from "./Footer.module.scss";

export default function Footer() {
    return (
        <>
            <footer className={styles.Wrapper}>
                <div className={styles.Container}>
                    <div className={styles.Info}>© 2022 Piheinz.<br/>
                        Made by <a href="https://bodhimooij.com/" target="_blank" rel="noreferrer">Bodhi Mooij</a>
                        <div className={styles.List}>
                            <a href="/terms-of-service">Terms of Service</a> • <a href="/privacy-policy">Privacy policy</a>
                        </div>
                    </div>
                    <a href="https://instagram.com/itsme.bodhi" target="_blank" rel="noreferrer" className={styles.Instagram}>
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={styles.IconWrapper}>
                            <path d="M11.6,16H4.4C2,16,0,14,0,11.6V4.4C0,2,2,0,4.4,0h7.3C14,0,16,2,16,4.4v7.3C16,14,14,16,11.6,16z M4.4,1.5
                            c-1.6,0-2.9,1.3-2.9,2.9v7.3c0,1.6,1.3,2.9,2.9,2.9h7.3c1.6,0,2.9-1.3,2.9-2.9V4.4c0-1.6-1.3-2.9-2.9-2.9H4.4z"/>
                            <path d="M8,11.6c-0.8,0-1.5-0.2-2.2-0.7c-0.8-0.6-1.3-1.4-1.4-2.4c-0.3-2,1.1-3.8,3.1-4.1c0.4-0.1,0.7-0.1,1.1,0
                            c1.6,0.2,2.8,1.5,3.1,3.1l0,0c0.1,1-0.1,1.9-0.7,2.7c-0.6,0.8-1.4,1.3-2.4,1.4C8.4,11.6,8.2,11.6,8,11.6z M8,5.8c-0.1,0-0.2,0-0.3,0
                            C6.5,6,5.7,7.1,5.9,8.3c0.2,1.2,1.3,2,2.5,1.8C8.9,10,9.4,9.7,9.8,9.3s0.5-1,0.4-1.6l0,0C10,6.7,9.3,6,8.4,5.8
                            C8.2,5.8,8.1,5.8,8,5.8z"/>
                            <path d="M12,4.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7h0c0.4,0,0.7,0.3,0.7,0.7S12.4,4.7,12,4.7z"/>
                        </svg>
                    </a>
                </div>
            </footer>
        </>
    )
}

