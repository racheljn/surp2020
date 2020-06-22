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
            This research was conducted by Rachel Nguyen and Bridget OConnor with guidance from Dr.Rooks.
            Rachel Nguyen and Bridget OConnor are both students at Loyola Marymount University, and were fortunate enough to receive funding to do this research
            through LMU's SURP program.
          </div>
          <br />
          <div>
            This research was conducted over a 6 week period, from May to June 2020.
          </div>
        </div>
        <div className={utilStyles.headingLg}>
        Methodology
        </div>
        <div className={utilStyles.lightText} >
          <div>
            In order to gain a greater background understanding of the current issues and history surrounding transnational
            Japanese and Korean biracial identity we spent a lot of time reading through various scholarly and news articles.
            Through this background we were better able to understand some of the preconcieved notions that might affect our sentiment data
            and it also influenced the way that we chose to categorize peoples opinions.
          </div>
          <br />
          <div>
            We gathered sentiment through extracting Youtube comments and tweets then analyzing them in google excel sheets.
            We chose to focus in on some famous biracial celebrities and the comments that we gathered and analyzed pertain to them.
            Please note that our sample sizes of comments are relatively small.
            We have organized the site sort the celebrities based on their citizenship at the time of research.
          </div>
          <br />
          We kept track of our citations using Zotero. You can view our bibliography
          <Link href="/sources">
            <a> here! </a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
