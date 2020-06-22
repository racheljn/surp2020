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
          Background Info here.
        </div>
      </div>
      </section>
    </Layout>
  )
}
