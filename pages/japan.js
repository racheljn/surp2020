import Head from 'next/head'
import Layout  from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPeoplesData } from '../lib/people'
import Link from 'next/link'
import Date from '../components/date'
import Celebs from '../lib/celebs'


export async function getStaticProps() {
  const allPeoplesData = getSortedPeoplesData('japan');
  const hlink = "/japan/[id]";
  const countryAs = "japan";
  const title = "Japan"
  return {
    props: {
      allPeoplesData,
      hlink,
      countryAs,
      title,
    }
  }
}

export default function Japan({ allPeoplesData, hlink, countryAs, title }) {
  return (
    <Layout home>
      <Celebs
        allPeoplesData = {allPeoplesData}
        hlink = {hlink}
        countryAs= {countryAs}
        title = {title}
      />
      <section className ={`${utilStyles.info} ${utilStyles.padding1px}`}>
      <div className={utilStyles.headingXl}>Japan</div>
      <div className={utilStyles.lightText} >
        <div>
          In the popular media Japan is widely regarded as a "homogeneous nation", a myth that serves to minimize the existence many minority groups that reside in Japan.
        </div>
      </div>
      </section>
    </Layout>
  )
}
