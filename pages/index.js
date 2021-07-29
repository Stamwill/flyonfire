import Head from 'next/head'
import * as React from 'react'
import { GraphQLClient } from 'graphql-request'
import {useGlobal} from '../api/GlobalContext'
import About from '../blocks/About'
import Hero from '../blocks/Hero'
import HeroNav from '../blocks/Hero/partials/HeroNav'
import Services from '../blocks/Services'
import Questions from '../blocks/Questions'
import styles from '../styles/Home.module.css'
import AppDrawer from '../blocks/Hero/partials/AppDrawer'
import Footer from '../components/Footer'
import AppAppBar from '../containers/AppAppBar/AppAppBar'
import Testimonials from '../blocks/Testimonials'

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT)
export async function getServerSideProps() {
  const { heroes, abouts, services, questions, testimonials, selfImgs } = await graphcms.request(`
  query {
    heroes {
      mainTitle
      subTitle
      nameTitle
      ideasTitle
      image {
        url
        width
        height
      }
    },

    abouts {
      textField
    },

    services {
      image {
        url
        width
        height
      }
      serviceTitle
      serviceInfo
    },

    questions {
      question
      answer
    },

    testimonials {
      reference {
        text
      }
      image {
        url
        width
        height
      }
      person
    },

    selfImgs {
      img {
        url
        width
        height
      }
    }
  }
`
)
  return {
    props: {
      heroes,
      abouts,
      services,
      questions,
      testimonials,
      selfImgs,
    },
  }
}

export default function Home({
  heroes,
  abouts,
  services,
  questions,
  testimonials,
  selfImgs,
}) {

  const { menu, settings: {footer, logos} } = useGlobal()

  const [menuIsOpen, setMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState)
  }

  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="Graphic and Animation Designer Lee Piechowicz, bringing your ideas to life" />
      </Head>

      <AppAppBar>
        <HeroNav navigations={menu} open={menuIsOpen} toggleMenu={toggleMenu} logo={logos} />
        <AppDrawer navigations={menu} open={menuIsOpen} toggleMenu={toggleMenu}/>
      </AppAppBar>

      <main>
        <Hero heroes={heroes} />
        <About id="about" about={abouts} selfImgs={selfImgs} />
        <Services id="services" services={services} />
        <Testimonials references={testimonials} />
        <Questions questions={questions} />
      </main>

      <Footer id="footer" footers={footer} />
    </div>
  )
}
