import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

const CLOCK_FORMAT = new Intl.DateTimeFormat('en-US', { timeStyle: 'short' })

const Home: NextPage = () => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => {
      clearInterval(interval);
    }
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Clock</title>
        <meta name="description" content="Simple live-updating clock" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>{CLOCK_FORMAT.format(now)}</h1>
      </main>
    </div>
  )
}

export default Home
