import Head from 'next/head'
import * as React from 'react'
import HeroNav from '../blocks/Hero/partials/HeroNav'
import AppDrawer from '../blocks/Hero/partials/AppDrawer'
import AppAppBar from '../containers/AppAppBar/AppAppBar'
import Footer from '../components/Footer'
import VideoGallery from '../blocks/VideoGallery'
import classes from '../styles/animationGallery.module.css'

export default function Home({
  navigations,
  footers,
  logos,
  videos,
}) {
  const [menuIsOpen, setMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState)
  }

  return (
    <div className={classes.root}>
      <Head>
        <title>FlyonFire Creative</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <meta name="description" content="Animation Projects for Youtube, Twitch and Professional logos" />
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
        <VideoGallery videos={videos} />
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

  const { videos } = await graphcms.request(
    `
    query Videos() {
      videos {
        video {
          url
        }
        text
      }
    }
    `
  )

  return {
    props: {
      navigations,
      footers,
      logos,
      videos,
    },
  }
}
