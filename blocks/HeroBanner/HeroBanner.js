import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import { GraphQLClient, gql } from 'graphql-request' 
import Section from '../../components/Section'
import classes from './HeroBanner.module.css'

function Hero({ heroes }) {
  console.log(heroes)
  return (
    <div className={classnames(classes.root)}>
      {heroes.map((hero, id) => (
        <div key={id}>
          <Image 
            src={hero.heroImg.url}
            width={hero.heroImg.width}
            height={hero.heroImg.height}
          />

          <div className={classes.mainHeading}>
            <h1 className={classes.mainTitle}>{hero.mainTitle}</h1>
            <h2 className={classes.subTitle}>{hero.subTitle}</h2>
          </div>

          <div className={classes.subHeading}>
            <h2 className={classes.name}>{hero.nameTitle}</h2>
            <h3 className={classes.ideas}>{hero.ideasTitle}</h3>
          </div>
        </div>
      ))} 
    </div>
  )
}

Hero.propTypes = {
  heroes: PropTypes.array,
}

export async function getStaticProps() {
  const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT)
  
  const { heroes } = await graphcms.request(
    gql`
      {
       heroes {
        id
        mainTitle
        subTitle
        nameTitle
        ideasTitle
      heroImg {
        url
        width
        height
      }
    }
  },
  `,
  )

  return {
    props: {
      heroes,
    }
  }
}
  
export default Hero