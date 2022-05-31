import Head from 'next/head'
import styles from './layout.module.scss'
import Footer from './Footer/Footer'
import Header from './Header'
import Sidebar from "./SideBar/SideBar";

export const siteTitle = 'Bodhi Moto';

export default function Layout({children, home, shop, ...props}) {
    return (
        <>
            <Head>
                <link rel="icon" href="/logo.svg"/>
                <meta name="description" content="Learn how to build a personal website using Next.js"/>
                <meta property="og:image"
                      content={`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}/>
                <meta name="og:title" content={siteTitle}/>
                <meta name="twitter:card" content="summary_large_image"/>
            </Head>

            <div className={styles.blur}></div>

            <div className={styles.container}>

                <Header home={home}/>

                {/*{!home && (*/}
                {/*    <div className={styles.backToHome}>*/}
                {/*        <Link href="/">*/}
                {/*            <a>← Back to home</a>*/}
                {/*        </Link>*/}
                {/*    </div>*/}
                {/*)}*/}

                <div className={styles.maincontent}>
                    {shop ? (
                            <>
                                <Sidebar/>
                                <div className={styles.main}>
                                    {children}
                                </div>
                            </>
                        ) :
                        <>
                            {children}
                        </>
                    }
                </div>

            </div>
            <Footer/>
        </>
    )
}