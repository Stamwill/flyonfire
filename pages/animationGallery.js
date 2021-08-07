import Head from 'next/head'
import * as React from 'react'
import PropTypes from 'prop-types'
import { GraphQLClient } from 'graphql-request'
import { useGlobal } from '../api/GlobalContext'
import HeroNav from '../blocks/Hero/partials/HeroNav'
import AppDrawer from '../blocks/Hero/partials/AppDrawer'
import AppAppBar from '../containers/AppAppBar/AppAppBar'
import Footer from '../components/Footer'
import VideoGallery from '../blocks/VideoGallery'
import classes from '../styles/animationGallery.module.css'

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT)
export async function getServerSideProps() {
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
      videos,
    },
  }
}

export default function AnimationGallery({ videos }) {
  const [menuIsOpen, setMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState)
  }

  const { menu, settings: { footer, logos } } = useGlobal()

  return (
    <div className={classes.root}>
      <Head>
        <title>FlyonFire Creative</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <link rel="icon" href="/static/favicon.ico" />
        <meta name="description" content="Animation Projects for Youtube, Twitch and Professional logos" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <AppAppBar open={menuIsOpen}>
        <HeroNav navigations={menu} open={menuIsOpen} toggleMenu={toggleMenu} logo={logos} />
        <AppDrawer navigations={menu} open={menuIsOpen} toggleMenu={toggleMenu}/>
      </AppAppBar>

      <main className={classes.main}>
        <VideoGallery videos={videos} />
      </main>

      <Footer id="footer" footers={footer} />
    </div>
  )
}

AnimationGallery.propTypes = {
  videos: PropTypes.array
}