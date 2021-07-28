import '../styles/globals.css'
import {GlobalProvider} from '../api/GlobalContext'
import { GraphQLClient } from 'graphql-request'

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
      const { navigations } = await graphcms.request(
        `
          query navigations() {
          navigations {
            title
            slug
          }
        }`
      )

      const { footers } = await graphcms.request(
        `
          query footers() {
            footers {
              title
            }
          }`
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

export default MyApp
