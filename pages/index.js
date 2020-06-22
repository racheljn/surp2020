import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.container}>
        <div className={utilStyles.heading2Xl}>
         Transnational Japanese and Korean Mixed-Race Identity and Sentiment
        </div>
        <div className={utilStyles.lightText}>
          The objectives of this study include: collecting, organizing, analyzing, and sharing data pertaining to the perception of biracial Japanese and Koreans online and in the media. 
          Through displaying our findings, we hope to foster understanding and positivity for those with Japanese and Korean transnational identities.
        </div>
      </section>
    </Layout>
  )
}
