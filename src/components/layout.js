import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'typeface-roboto'
import { StaticQuery, graphql, Link } from 'gatsby'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';

import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
                  integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
                  crossOrigin="anonymous"></link>

            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"></link>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
       </Helmet>
          <AppBar position="static">
              <Toolbar>
                  <Typography variant="title" color="inherit">
                      <Link
                          to="/"
                          style={{
                              color: 'white',
                              textDecoration: 'none',
                          }}
                      >
                          {data.site.siteMetadata.title}
                      </Link>
                  </Typography>
              </Toolbar>
          </AppBar>
        <CssBaseline>
          {children}
        </CssBaseline>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
