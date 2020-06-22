import React from 'react';
import styles from './navbar.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Navigation() {

  return (
    <div className={styles.row}>
      <div className={styles.block}>
        <Link href="/" >
          <a className = {styles.headingMd} >Home</a>
        </Link>
      </div>
      <div className={styles.block}>
        <Link href="/about" >
          <a className = {styles.headingMd} >About</a>
        </Link>
      </div>
      <div className={styles.block}>
        <Link href="/japan" >
          <a className = {styles.headingMd}  >Japan</a>
        </Link>
      </div>
      <div className={styles.block}>
        <Link href="/korea">
          <a className = {styles.headingMd} >Korea</a>
        </Link>
      </div>
      <div className={styles.block}>
        <Link href="/usa">
          <a className = {styles.headingMd} >USA</a>
        </Link>
      </div>
    </div>
  );
}
