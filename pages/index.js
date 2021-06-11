import Head from 'next/head'
import Image from 'next/image'
import About from '../blocks/About'
import Hero from '../blocks/Hero'
import Services from '../blocks/Services'
import Questions from '../blocks/Questions'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FlyonFire Creative</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@700&display=swap" rel="stylesheet" />
      </Head>
      <header>
        <Hero />
      </header>
      <main>
        <About />
        <Services />
        <Questions />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
