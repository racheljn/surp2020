import Head from 'next/head'
import Layout  from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'

export default function Celebs({ allPeoplesData, hlink, countryAs, title }) {

  return (
    <>
    <Head>
      <title>{title}</title>
    </Head>
    <section className ={`${utilStyles.people} ${utilStyles.padding1px}`}>
      <h2>
      Celebrities
      </h2>
      <ul className={utilStyles.list}>
        {allPeoplesData.map(({id, name}) => (
          <li className={utilStyles.card} key={id}>
            <Link href={`${hlink}`} as={`/${countryAs}/${id}`}>
              <a>{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
    </>
  )
}
