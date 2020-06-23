import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPeoplesData } from '../lib/people'
import Link from 'next/link'
import Date from '../components/date'
import Celebs from '../lib/celebs'

export async function getStaticProps() {
  const allPeoplesData = getSortedPeoplesData('usa');
  const hlink = "/usa/[id]";
  const countryAs = "usa";
  const title = "USA"
  return {
    props: {
      allPeoplesData,
      hlink,
      countryAs,
      title,
    }
  }
}

export default function USAHome({ allPeoplesData, hlink, countryAs, title }) {
  return (
    <Layout home>
      <Celebs
        allPeoplesData = {allPeoplesData}
        hlink = {hlink}
        countryAs= {countryAs}
        title = {title}
      />
      <section className ={`${utilStyles.info} ${utilStyles.padding1px}`}>
      <div className={utilStyles.headingXl}>USA</div>
      <div className={utilStyles.lightText} >
        <div>
          <div>
            Sandra Tutwiler sums up the role of race in the US, when she writes, 
            “race categories have historically been used in the United States 
            to separate people for social, economic, political, and ideological 
            purposes”
            <Link href="/sources">
              <a> (Tutwiler). </a>
            </Link>
            She dives into how white people have used race to preserve their statuses 
            at the top of the social hierarchy, dismissing those of color and mixed 
            race. In regards to the Asian communities, initially, interracial marriages 
            were disdained and not recognized. However, Asian-White marriages boomed
            after World War II, with U.S. servicemen marrying Asian women during their 
            service. These interracial marriages were better accepted due to the colorism 
            prevalent in Asian cultures. Additionally, intercultural marriages within the 
            Asian community were not common due to prejudices and historical conflicts 
            between nations, such as the Japanese and Koreans. Today, mixed Asians do not 
            need to ignore their transnational culture to be accepted by the Asian-American 
            community like they used to.
          </div>
        </div>
        <div>
          <br/>
            <a href="#top">Return to the Top</a></div>
          <br/>
      </div>
      </section>
    </Layout>
  )
}
