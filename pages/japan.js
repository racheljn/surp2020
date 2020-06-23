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
          In the popular media Japan is widely regarded as a "homogeneous nation", a myth that serves to minimize the existence the many ethnic minority groups that reside in Japan.
          Some ethnic minority groups in Japan include, but are not limited to, foreign workers, <a href="#okinawan"> Okinawans(Uchinanchuu People), Ainu</a>, <a href='#zainichi'>Zainichi Koreans/Chinese,</a> and <a href='#Hafu'>Hafu</a>.
          Notably there are also the Burakumin and Hibakusha, two minority groups known as ‘invisible minority’, since they are no different from majority Japanese in terms of race, ethnicity, language, culture, religion, or citizenship <sub><sup>(<a href="https://surp2020.racheljn.vercel.app/sources">Yamashiro</a>)</sup></sub>.
          In the Edo era Burakumin class consisted of workers involved with killing (butchers,tanners, etc) and although the caste system from the Edo era is abolished Burakumin still face job, marriage, and other discrimination to this day due to the perception of "impurity".
          In a similar way Hibakusha also face marriage discrimination for being percieved as "impure", Hibakusha are victims or descendants of those who experienced the Nagasaki/Hiroshima bombing<sub><sup>(<a href="https://surp2020.racheljn.vercel.app/sources">Murphy-Shigematsu</a>)</sup></sub>.
          </div>
          <br/>
          <div id='okinawan'>
          As for the ethnic minority groups, what is now known as Okinawa was once Ryuukyuu. A country annexed as a prefecture, and the first foreign country absorbed by Imperial Japan. Okinawans call themselves Uchinanchuu people in the Okinawan language.
          On the opposite end of Japan there are the Ainu people, whose language and culture are distinct from Japanese language and culture. However, due to the way in which Ainu lands were
          colonized and continue to be enveloped by the Japanese state, Ainu are all Japanese citizens and most speak Japanese<sub><sup>(<a href="https://surp2020.racheljn.vercel.app/sources">Yamashiro</a>)</sup></sub>.
          </div>
          <br/>
          <div id='zainichi'>
          The third group is Zainichi people, which in Japanese, literally means that "the group resides in Japan". For Zainichi Koreans many have been in Japan for over a century, dating back to Japanese colonization.
          Zainichi Koreans may be the third or fourth generation born and raised in Japan, and often only know Japanese<sub><sup>(<a href="https://surp2020.racheljn.vercel.app/sources">Yamashiro</a>)</sup></sub>. But they are still differentiated from mainstream Japanese, dont recieve Japanese citizenship, and experience discrimination in Japan based on their ethnic background, once it is discovered.
          Some change their names to try to pass as Japanese to avoid discrimination, or when applying to be a naturalized Japanese citizens face legal pressure to change their name to a Japanese one <sub><sup>(<a href="https://surp2020.racheljn.vercel.app/sources">Murphy-Shigematsu</a>)</sup></sub>.
          </div>
          <br/>
          <div id='Hafu'>
          Hafu are people who are half Japanese, they faced great stigma in the postwar period however
          due to increasing globalization the image of Hafu has become somewhat more trendy in Japan<sub><sup>(<a href="https://surp2020.racheljn.vercel.app/sources">Yamashiro</a>)</sup></sub>. However becoming "trendy"
          does not equate to being accepted as Japanese and some Hafu in Japan struggle with their portrayal in the media and stereotypes surrounding Hafu, even going as far as suicide<sub><sup>(<a href="https://surp2020.racheljn.vercel.app/sources">McNeil</a>)</sup></sub>.
          </div>
          <br/>
          <div>
          Additionally depending on the mix Hafu can face different levels of discrminiation for example, A ‘white-Japanese’ mix tends to be more highly regarded than, say, a ‘black-Japanese’ mix, due to colorism<sub><sup>(<a href="https://surp2020.racheljn.vercel.app/sources">Yamashiro</a>)</sup></sub>.
          Some Hafu are bullied in schools for looking different or having a darker skin color, and some end up dropping out or skipping school due to this <sub><sup>(<a href="https://surp2020.racheljn.vercel.app/sources">下地(Shimoji)</a>)</sup></sub>.
          However not all Hafu look phenotypically different as Hafu who are mixed Asian could often pass as Japanese. However, its not all positive, while other Hafu can easily claim their mixed identity and foreign background,
          mixed Asian Hafu might experience more constraints in claiming their ethnic background and having it validated by others<sub><sup>(<a href="https://surp2020.racheljn.vercel.app/sources">Törngren</a>)</sup></sub>.
          </div>
          <br/>
          <div>
          In 2018 the Japanese government signed a bill to allow for hundreds of thousands of workers to come to Japan to work in specific sectors such as construction, nursing and farming<sub><sup>(<a href="https://surp2020.racheljn.vercel.app/sources">Okazaki</a>)</sup></sub>.
          Additionally statistics found that in 2016 one in every 29 marriages was between a Japanese national and a foreign citizen <sub><sup>(<a href="https://surp2020.racheljn.vercel.app/sources">International Marriages</a>)</sup></sub>.
          As such, Japan is likely to grow more and more diverse in the years to come.
          In order to eliminate discrmination, Japan might need to wrestle with some of its current welfare, immigration, education, and health policies.
          However its difficult to fix the policy problems if many people believe that diversity doesnt exist in Japan or is so small that it does not matter<sub><sup>(<a href="https://surp2020.racheljn.vercel.app/sources">下地(Shimoji)</a>)</sup></sub>.
          On this page we hope to highlight some biracial individuals who expand the notion of what it means to be "Japanese".
          They represent a hope for a future where diversity in Japan is no longer stifled by the myth of a entirely homogeneous nation.
          </div>
          <br/>
          <a href="#top">Return to the Top</a>
        </div>
      </div>
      </section>
    </Layout>
  )
}
