import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'

import { NewsSection } from '../components/sections/NewsSection'
import { WithBgImage } from '../components/sections/WithBgImage'
import styles from '../styles/home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Weekly Challenge - Week-1</title>
      </Head>
      <div className={styles.container}>
        <NewsSection />
        <WithBgImage />
      </div>
    </>
  )
}

export default Home
