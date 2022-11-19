import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic';

const Example = dynamic(() => import('./components/Toggle'));

export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Patent Law ThinkAgainLab</title>
        <meta name="description" content="patentlawthinkagainlab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.myheading}>THE PATENTS ACT, 1970</h1>
      <Example />
     
      
    </div>
  )
}
