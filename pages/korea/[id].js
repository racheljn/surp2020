import Layout from '../../components/layout'
import { getAllPeoplesIds, getPeopleData } from '../../lib/people'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'

export async function getStaticPaths(){
  const paths = getAllPeoplesIds('korea')
  return {
    paths,
    fallback:false
  }
}

export async function getStaticProps({ params }){
  const peopleData = await getPeopleData(params.id, 'korea')
  return {
    props: {
      peopleData
    }
  }
}
export default function People({ peopleData }) {
  return (
    <Layout>
    <Head>
      <title>{peopleData.name}</title>
    </Head>

      <article>
        <h1 className={utilStyles.headingXl} >{peopleData.name}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={peopleData.date}/>
        </div>

        <div>
          <div>
            <img className={utilStyles.borderCircle} src = {peopleData.img} alt = {peopleData.id}/>
          </div>
          <div dangerouslySetInnerHTML = {{ __html: peopleData.contentHtml }}/>
        </div>
      </article>

      <div className = {utilStyles.back}>
        <Link href="/korea">
          <a>← Back</a>
        </Link>
      </div>
    </Layout>)
}
