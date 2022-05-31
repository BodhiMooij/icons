import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Hero from "../components/Hero";
import CallToAction from "../components/CallToAction";

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle} - Home</title>
            </Head>

            <Hero subTitle="Get to know" title="the one and only" text="Piheinz is a back to back banger music producer focused on the best sounds out there."/>

            <CallToAction/>

        </Layout>
    )
}
