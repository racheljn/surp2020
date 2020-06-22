import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Navigation from './navbar'

export const siteTitle = 'Transnational Biracial Sentiment'

function Layout({ children, home}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name = "description"
          content = "Informational website about how Half Japanese and Half Koreans are perceived and how that correlates to their own sense of identity, SURP 2020."
        />
        <meta name="og:title" content ={siteTitle}/>
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className = {styles.header}>
        <Navigation/>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
