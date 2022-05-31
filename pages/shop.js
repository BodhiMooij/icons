import Layout, { siteTitle } from "../components/layout"
import Head from "next/head"
import Hero from "../components/Hero";
import styles from "../components/layout.module.scss";

export default function Shop() {
    return (
        <Layout shop>
            <Head>
                <title>{siteTitle} - All products</title>
            </Head>

                Maaaaiiin

        </Layout>
    )
}
