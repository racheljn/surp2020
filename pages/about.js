import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'

export default function About() {
  return (
    <Layout home>
      <Head>
        <title>About</title>
      </Head>
      <div className={utilStyles.containerLeft}>
        <div className={utilStyles.headingXl}>
        About Us
        </div>
        <div className={utilStyles.lightText} >
          <div>
            This research was conducted by Rachel Nguyen and Bridget O'Connor with guidance from Dr.Rooks.
            We are both students at Loyola Marymount University fortunate enough to receive funding to do this research
            through LMU's Summer Undergraduate Research Program (SURP).
            As biracial individuals minoring in Asian and Pacific Studies, we are both interested in learning about
            the experiences of other multiracial people and the signficance of transnational representation today.
          </div>
          <br />
          <div>
            This research was conducted over a 6 week period (May 18th - June 26th) in 2020.
          </div>
        </div>
        <div className={utilStyles.headingLg}>
        Methodology
        </div>
        <div className={utilStyles.lightText} >
          <div>
            To gain a greater background understanding of the current issues and history surrounding transnational,
            Japanese and Korean biracial identity, we spent around four weeks reading through various scholarly journals and news articles.
            With this background information, we can better understand preconcieved notions that may affect our sentiment data and analyze people's opinions.
          </div>
          <br />
          <div>
            Then we collected sentiment by extracting YouTube comments and tweets and organized them into Google Excel sheets.
            We chose to focus on some famous biracial celebrities, using comments pertaining to them to create infographics.
            Please note that our sample sizes of comments are relatively small!
          </div>
          <br />
          <div>
            We have organized the celebrities on this website based on their citizenship at the time of research.
            Rachel focused on mixed-race individuals of Korean descent, while Bridget's emphasis was those of Japanese descent.
          </div>
          <br />
          We tracked our citations using Zotero. You can view our bibliography
          <Link href="/sources">
            <a> here! </a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
