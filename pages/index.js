import Head from 'next/head'
// import Image from 'next/image'
import * as React from 'react'
import About from '../blocks/About'
import Hero from '../blocks/Hero'
import HeroNav from '../blocks/Hero/partials/HeroNav'
import Services from '../blocks/Services'
import Questions from '../blocks/Questions'
import styles from '../styles/Home.module.css'
import AppDrawer from '../blocks/Hero/partials/AppDrawer'
import Footer from '../components/Footer'
import ProjectGallery from '../containers/ProjectGallery'
import Testimonials from '../blocks/Testimonials'

export default function Home({
  heroes,
  navigations,
  abouts,
  services,
  questions,
  testimonials,
  selfImgs,
  footers,
  logos,
  galleries,
  projectsAnimations,
  projectsLogos,
}) {
  const [menuIsOpen, setMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState)
  }

  const [logosIsOpen, setLogosOpen] = React.useState(false)
  const [animationsIsOpen, setAnimationsOpen] = React.useState(false)

  const testFuncOne = () => {
    setLogosOpen(prevstate => !prevstate)
    setAnimationsOpen(false)
    console.log('logos', logosIsOpen)
    console.log('animations',animationsIsOpen)
  }

  const testFuncTwo = () => {
    setLogosOpen(false)
    setAnimationsOpen(false)
  }

  console.log(navigations[0])

  return (
    <div className={styles.container}>
      <Head>
        <title>FlyonFire Creative</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <HeroNav navigations={navigations} open={menuIsOpen} toggleMenu={toggleMenu} logo={logos}/>
      <AppDrawer navigations={navigations} open={menuIsOpen} toggleMenu={toggleMenu}/>

      {logosIsOpen ? (
        <ProjectGallery 
          galleries={galleries} 
          projectsAnimations={projectsAnimations} 
          projectsLogos={projectsLogos}
          testFuncTwo={testFuncTwo}
        />
      ) : (
        <Hero heroes={heroes}/>
      )}
      <header>
        {/* <Hero heroes={heroes} /> */}
        <p onClick={testFuncOne}>click me</p>
      </header>
{/* 
      <main>
        <About id="about" about={abouts} selfImgs={selfImgs} />
        <Services id="services" services={services} />
        <Testimonials references={testimonials} />
        <Questions questions={questions} />
      </main> */}

      <footer>
        <Footer id="footer" footers={footers} />
      </footer>
    </div>
  )
}

import { GraphQLClient } from 'graphql-request'

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT)

export async function getStaticProps() {
  const { heroes } = await graphcms.request(
    `
    query Heroes() {
      heroes {
        mainTitle
        subTitle
        nameTitle
        ideasTitle
      }
    },
    `,
  )
  const { navigations } = await graphcms.request(
    `
    query Navigations() {
      navigations {
        title
        slug
      }
    }
    `,
  )
  const { abouts } = await graphcms.request(
    `
    query Abouts() {
      abouts {
        textField
      }
    }
    `,
  )

  const { services } = await graphcms.request(
    `
    query Services() {
      services {
        image {
          url
        }
        serviceTitle
        serviceInfo
      }
    }
    `,
  )

  const { questions } = await graphcms.request(
    `
    query questions() {
      questions {
        question
        answer
      }
    }
    `,
  )

  const { testimonials } = await graphcms.request(
    `
    query testimonials() {
      testimonials {
        reference {
          text
        }
        image {
          url
        }
        person
      }
    }
    `,
  )

  const { selfImgs } = await graphcms.request(
    `
    query selfImgs() {
      selfImgs {
        img {
          url
        }
      }
    }
    `
  )

  const { footers } = await graphcms.request(
    `
    query footers() {
      footers {
        title
      }
    }
    `
  )

  const { logos } = await graphcms.request(
    `
    query logos() {
      logos {
        logo {
          url
        }
      }
    }
    `
  )

  
  const { galleries } = await graphcms.request(
    `
    query galleries() {
        galleries {
          image {
            url
          }
          imageText
        }
      }
    `,
  )

  const { projectsAnimations } = await graphcms.request (
    `
    query projectsAnimations() {
      projectsAnimations {
        logo {
          url
        }
        text
      }
    }
    `
  )

  const { projectsLogos } = await graphcms.request (
    `
    query projectsLogos() {
      projectsLogos {
        logo {
          url
        }
        text
      }
    }
    `
  )

  return {
    props: {
      heroes,
      navigations,
      abouts,
      services,
      questions,
      testimonials,
      selfImgs,
      footers,
      logos,
      galleries,
      projectsAnimations,
      projectsLogos,
    },
  }
}
