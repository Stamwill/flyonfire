import Head from 'next/head'
import * as React from 'react'
import HeroNav from '../blocks/Hero/partials/HeroNav'
import AppDrawer from '../blocks/Hero/partials/AppDrawer'
import AppAppBar from '../containers/AppAppBar/AppAppBar'
import Footer from '../components/Footer'
import Gallery from '../blocks/Gallery'
import classes from '../styles/projects.module.css'

export default function Home({
  navigations,
  footers,
  logos,
  galleries,
}) {
  const [menuIsOpen, setMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState)
  }

  return (
    <div className={classes.root}>
      <Head>
        <title>FlyonFire Creative</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>


      <AppAppBar open={menuIsOpen}>
        <HeroNav navigations={navigations} open={menuIsOpen} toggleMenu={toggleMenu} logo={logos} />
        <AppDrawer navigations={navigations} open={menuIsOpen} toggleMenu={toggleMenu}/>
      </AppAppBar>

      <main className={classes.main}>
        <Gallery galleries={galleries}/>
      </main>

      <footer className={classes.footer}>
        <Footer id="footer" footers={footers} />
      </footer>
    </div>
  )
}

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

  return {
    props: {
      navigations,
      footers,
      logos,
      galleries,
    },
  }
}
