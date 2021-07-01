import * as React from 'react'
import Head from 'next/head'
import HeroNav from '../blocks/Hero/partials'
import AppDrawer from '../blocks/Hero/partials/AppDrawer'
import Gallery from '../blocks/Gallery'
import Footer from '../components/Footer'

const Projects = ({
  navigations,
  galleries,
  footers,
}) => {

  const [menuIsOpen, setMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState)
  }

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
      <HeroNav navigations={navigations} open={menuIsOpen} toggleMenu={toggleMenu} />
      <AppDrawer navigations={navigations} open={menuIsOpen} toggleMenu={toggleMenu}/>
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
      navigations,
      galleries,
      footers,
    },
  }
}
