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
            race, stemming from discrimination during slavery. The exclusion and 
            classifications of people were often based on appearance. 
          </div>
          <br />
          <div>
            In regards to the Asian communities, interracial marriages initially
            were disdained and not recognized. However, Asian-White marriages boomed
            after World War II, with U.S. servicemen marrying Asian women during their 
            service. These interracial marriages were better accepted due to the colorism 
            prevalent in Asian cultures. Additionally, intercultural marriages within the 
            Asian community were not common due to prejudices and historical conflicts 
            between nations, such as the Japanese and Koreans. Today, mixed Asians do not 
            need to ignore their transnational culture to be accepted by the Asian-American 
            community like they used to.
          </div>
          <br />
          <div>
            Further studies on the identities of mixed invdividuals reveal how these 
            are "edge dancers," in which they may dance between the boundaries of their 
            different cultures depending on the situation
            <Link href="/sources">
              <a> (Houston and Hogan). </a>
            </Link>
            This process of dancing redefines the edges of what it means to be a multicultural 
            indivdual, forcing others to reinterpret their own definitions of certain social groups 
            and multiculturalism. One way of studying the construction of multiracial indenties 
            focuses on: alienation from family members, schoolmates, and others in the communities; 
            complexity, that is the result of having mixed heritage; and finally celebration, in 
            which individuals learned to embrace their mixed-raceness.
          </div>
          <br />
          <div>
            Maria P.P. Root introduces an ecological model of racial identity 
            development that includes studying the contexts of one's, gender, 
            class, and regional history of race
            <Link href="/sources">
              <a> (Root). </a>
            </Link>
            According to her, the family unit is key in assisting multiracial 
            children in learning about and accepting their cultures. Those who 
            feel rejected by family members or others may develop hatred against 
            a cultural group, associating their trauma with a particular race. 
            Additionally, she points out that factors, such as gender, the history 
            of one's region, dating prejudices, and the labeling of mixed people 
            from outsiders all play a role in the fluid process of identity 
            development.
          </div>
          <br />
          <div>
            Root also conducted research in regards to how siblings 
            of mixed heritage identities self-identified differently. Inherited 
            influences, traits, social environments can all differ from sibling to 
            sibling. During her research, she focused on the effects of hazing, 
            family dysfunction, the legacy of civil rights, and other salient identities, 
            including religion and military affiliation on sibling pairs. Traumas 
            caused by discrimination manifest in several ways, such as refusal to date, 
            avoidance of people of a specific heritage, and the need to overcompensate in 
            financial or social success. Feelings of conflict arise when there is incongruency 
            in the way others perceive a mixed individual and how they view themselves. 
            She concluded that for a positive development of identity, one must not confine 
            themselves to the scope of others' perceptions nor deny a part of their racial 
            heritage.
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
