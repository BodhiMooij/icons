import Layout, { siteTitle } from "../components/layout"
import Head from "next/head"
import Headline from "../components/Headline";

export default function About() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle} - About</title>
            </Head>

            <Headline subTitle="A more humane" title="way to connect" text="Piheinz is a back to back banger music producer focused on the best sounds out there."/>

        </Layout>
    )
}
