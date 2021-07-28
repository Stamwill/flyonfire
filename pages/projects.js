import Head from 'next/head'
import * as React from 'react'
import { GraphQLClient } from 'graphql-request'
import { useGlobal } from '../api/GlobalContext'
import HeroNav from '../blocks/Hero/partials/HeroNav'
import AppDrawer from '../blocks/Hero/partials/AppDrawer'
import Footer from '../components/Footer'
import ProjectGallery from '../containers/ProjectGallery'
import AppAppBar from '../containers/AppAppBar/AppAppBar'
import classes from '../styles/projects.module.css'

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT)
export async function getServerSideProps() {
  const { galleries, projectsAnimations, projectsLogos } = await graphcms.request(`
    query {
      galleries {
        image {
          url
        }
        imageText
        }

      projectsAnimations {
        logo {
          url
        }
        slug
        text
      },

      projectsLogos {
        logo {
          url
        }
        slug
        text
      }
    }
    `,
  )
  return {
    props: {
      galleries,
      projectsAnimations,
      projectsLogos,
    },
  }
}

export default function Home({
  galleries,
  projectsAnimations,
  projectsLogos,
}) {

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
        <meta name="description" content="Gallery for professional Animations and Logos" />
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
         <ProjectGallery
          galleries={galleries}
          projectsAnimations={projectsAnimations}
          projectsLogos={projectsLogos}
        />
      </main>
      
      <Footer id="footer" footers={footer} />
    </div>
  )
}