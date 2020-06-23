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
        Since 2000, international marriages between Korean men and other Asian women boomed in Korea due to policymaking that promoted multicultural families due to the low birth rates in the nation. After Hines Ward earned MVP in Super Bowl XL, he announced his visit back to his birthplace, Korea(Biracial Identity). This led to increased coverage of multicultural people and families in Korea. Additionally, the government issued new policies for biracial individuals and foreigners in 2006, funding programs that supported legal multicultural marriages. This excludes 새터민 (North Korean defectors), but provides migrant women married to Korean men with education in Korean history, language, etiquette, and marriage and child-rearing counseling services. However, even with increased efforts to promote multicultural families in Korea, these families faced prejudices and have often been dismissed as an effort to preserve the "pureblood" myth in Korea. After Japanese colonization, Koreans attempted to recover national pride by proclaiming a homogeneous national identity. Additionally, colorism is pervasive in Korea, where society values pale complexion. The homogenous nation and colorism ideologies are detrimental to the multiculturial families projects and the individuals involved. Not only are those who are not pure-blood Koreans discriminated against, but also those with darker complexions. This is demonstrated in the survey that Government Youth Commission (GYC) of Korea conducted in 2006 where 37.5% of Black-Koreans, 17.6% of White-Koreans, and 10.8% of Asian-Koreans identified as foreigners. Additionally, a survey conducted by the Gyeonggi Provincial Council's Budget Policy Office found that 69% of high-school aged multicultural individuals in Korea do not receive any form of education. These issues have pushed high-profile mixed-race individuals to break barriers and shape the         </div>
      </div>
      </section>
    </Layout>
  )
}
