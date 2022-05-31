import Link from 'next/link'
import styles from './NavBar.module.scss'

const NavBar = () => (
    <nav className={styles.NavBar}>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/about">
            <a>About</a>
        </Link>
        <Link href="/shop">
            <a>Shop</a>
        </Link>
    </nav>
)

export default NavBar
