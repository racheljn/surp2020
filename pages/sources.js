import Head from 'next/head'
import Layout from '../components/layout'
import Bib from '../bibliography/SURP2020'

export default function Sources() {

  return (
    <Layout home>
      <Head>
        <title>Bibliography</title>
      </Head>
      <article>
        <h1> Bibliography </h1>
        <div dangerouslySetInnerHTML = {{ __html: Bib().bibHtml }}/>
      </article>
    </Layout>
  )
}
