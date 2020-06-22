import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPeoplesData } from '../lib/people'
import Link from 'next/link'
import Date from '../components/date'
import Celebs from '../lib/celebs'


export async function getStaticProps() {
  const allPeoplesData = getSortedPeoplesData('korea');
  const hlink = "/korea/[id]";
  const countryAs = "korea";
  const title = "Korea"
  return {
    props: {
      allPeoplesData,
      hlink,
      countryAs,
      title,
    }
  }
}

export default function KoreaHome({ allPeoplesData, hlink, countryAs, title }) {
  return (
    <Layout home>
      <Celebs
        allPeoplesData = {allPeoplesData}
        hlink = {hlink}
        countryAs= {countryAs}
        title = {title}
      />
      <section className ={`${utilStyles.info} ${utilStyles.padding1px}`}>
      <div className={utilStyles.headingXl}>Korea</div>
      <div className={utilStyles.lightText} >
        <div>
          Background Info here.
        </div>
      </div>
      </section>
    </Layout>
  )
}
