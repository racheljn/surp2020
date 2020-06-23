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
          <div>
          In the popular media Japan is widely regarded as a "homogeneous nation", a myth that serves to minimize the existence many ethnic minority groups that reside in Japan.
          Some ethnic minority groups in Japan include, but are not limited to, foreign workers, <a href="#okinawan"> Okinawans(Uchinanchuu People), Ainu</a>, <a href='#zainichi'>Zainichi Koreans/Chinese, Nikkeijin,</a>, and <a href='#hafu'>Hafu</a>.
          Notably there are also the Burakumin and Hibakusha, two minority groups known as ‘invisible minority’, since they are no different from majority Japanese in terms of race, ethnicity, language, culture, religion, or citizenship (Social Construction of Race).
          the group consisted of workers involved with killing (butchers,tanners, etc) and they still face job, marriage, and other discrimination to this day due to the perception of "impurity".
          In a similar way Hibakusha also face marriage discrimination for being percieved as "impure", Hibakusha are victims or descendants of those who experienced the Nagasaki/Hiroshima bombing.
          </div>
          <br/>
          <div id='okinawan'>
          As for the ethnic minority groups, what is now known as Okinawa was once Ryuukyuu. A country annexed as a prefecture, and the first foreign country absorbed by Imperial Japan. Okinawans call themselves Uchinanchuu people in the Okinawan language.
          On the opposite end of Japan there are the Ainu people, whose language and culture are distinct from Japanese language and culture. However, due to the way in which Ainu lands were
          colonized and continue to be enveloped by the Japanese state, Ainu are all Japanese citizens and most speak Japanese.
          </div>
          <br/>
          <div id='zainichi'>
          The third group is Zainichi people, which in Japanese, literally means that the group resides in Japan. For Zainichi Koreans many have been in Japan for over a century, dating back to Japanese colonization.
          Zainichi Koreans may be the third or fourth generation born and raised in Japan, thus unable to speak anything other than Japanese, not having lived anywhere else. But they are still differentiated from mainstream Japanese
          and experience discrimination in Japan based on their ethnic background, once it is discovered. Many apply for name changes in order to try to pass as Japanese to avoid discrimination.
          Then there are the Nikkeijin people of Japanese ancestry who have returned to Japan but might lack mainstream Japanese cultural knowledge.
          </div>
          <br/>
          <div id='hafu'>
          </div>
          <a href="#top">Return to the Top</a>
        </div>
      </div>
      </section>
    </Layout>
  )
}
