import styles from "./Header.module.scss";
import NavBar from "./NavBar";
import Logo from './Logo';
import Link from "next/link";

const name = 'Bodhi Mooij'

export default function Header({home}) {
    return (
        <>
            <header className={styles.Wrapper}>
                <div className={styles.logo}>
                    {home ? (
                        <>
                            {/*<Image*/}
                            {/*    priority*/}
                            {/*    src="/logo.svg"*/}
                            {/*    height={69}*/}
                            {/*    width={59}*/}
                            {/*    alt={name}*/}
                            {/*/>*/}
                            <Logo home={home}/>
                        </>
                    ) : (
                        <>
                            <Link href="/">
                                <a className={styles.LogoLink}>
                                    {/*<Image*/}
                                    {/*    priority*/}
                                    {/*    src="/logo.svg"*/}
                                    {/*    height={69}*/}
                                    {/*    width={59}*/}
                                    {/*    alt={name}*/}
                                    {/*/>*/}
                                    <Logo home={home}/>
                                </a>
                            </Link>
                        </>
                    )}
                </div>

                <NavBar/>
            </header>
        </>
    )
}