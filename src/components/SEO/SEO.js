import {Helmet} from 'react-helmet';
import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import logo from '../../images/Logo-parenthese-iodee.png'

const SEO = () => {
  const query = useStaticQuery(
    graphql`
      query SEO {
        site{
          siteMetadata {
            defaultTitle: title
            description
          }
        }
      }
  `)
  return (
    <>
      <Helmet >
        <link rel="icon" type="image/png" href={logo} />
        <title>{query.site.siteMetadata.defaultTitle}</title>
      </Helmet>
    </>
  )
}

export default SEO