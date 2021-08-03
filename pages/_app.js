import * as React from 'react'
import '../styles/globals.css'
import PropTypes from 'prop-types'
import { GraphQLClient } from 'graphql-request'
import {GlobalProvider} from '../api/GlobalContext'

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT)

function MyApp({ cmsProps, Component, pageProps }) {
  return (
    <GlobalProvider {...cmsProps}>
      <Component {...pageProps} />
    </GlobalProvider>
  )
}

MyApp.getInitialProps = async (props) => {
  const { Component, ctx } = props

  let cmsProps = {}
  if (ctx.req) {
    const { navigations, footers, logos } = await graphcms.request(
      `
        query {
        navigations {
          title
          slug
        },

        footers {
          title
        },

        logos {
          logo {
            url
          }
        }
      }
      `
    )
    cmsProps = {
      menu: navigations,
      settings: {
        footer: footers,
        logos,
      }
    }
  }

  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return {
    cmsProps,
    pageProps,
  }
}

MyApp.propTypes = {
  cmsProps: PropTypes.object,
  Component: PropTypes.object,
  pageProps: PropTypes.object
}

export default MyApp
