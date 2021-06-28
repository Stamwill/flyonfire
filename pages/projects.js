import * as React from 'react'
import Head from 'next/head'
import HeroNav from '../blocks/Hero/partials'
import Gallery from '../blocks/Gallery'
import Footer from '../components/Footer'

const Projects = ({
  heroes,
  navigations,
  abouts,
  services,
  questions,
  testimonials,
  galleries,
  selfImgs,
  footers,
}) => {
return (
  <div>
    <Head>
      <title>FlyonFire Creative</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@700&display=swap"
        rel="stylesheet"
        />
    </Head>

    <header>
      <HeroNav navigations={navigations}/>
    </header>
{/* 
    <main>
      <Gallery />
    </main> */}

    <footer>
      <Footer footers={footers}/>
    </footer>
  </div>

)
}

export default Projects

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

  return {
    props: {
      heroes,
      navigations,
      abouts,
      services,
      questions,
      testimonials,
      galleries,
      selfImgs,
      footers,
    },
  }
}
