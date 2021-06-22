import Head from 'next/head'
import Image from 'next/image'
import * as React from 'react'
import About from '../blocks/About'
import Hero from '../blocks/Hero'
import Services from '../blocks/Services'
import Questions from '../blocks/Questions'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Testimonials from '../blocks/Testimonials'
import Gallery from '../blocks/Gallery'

export default function Home({
  heroes,
  heroNavs,
  abouts,
  services,
  questions,
  testimonials,
  galleries,
})
{
  // console.log('index', galleries[0].image.url)
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
      <header>
        <Hero heroes={heroes} heroNavs={heroNavs} />
      </header>
      <main>
        <About about={abouts} />
        <Services services={services} />
        <Gallery galleries={galleries}/>
        <Testimonials references={testimonials} />
        <Questions questions={questions} />
      </main>
      <footer>
        <Footer />
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
  const { heroNavs } = await graphcms.request(
    `
    query HeroNavs() {
      heroNavs {
        logo {
          url
        }
        about
        projects
        services
        contact
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

  return {
    props: {
      heroes,
      heroNavs,
      abouts,
      services,
      questions,
      testimonials,
      galleries,
    },
  }
}
