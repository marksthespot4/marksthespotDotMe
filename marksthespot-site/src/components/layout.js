/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FaLastfm, FaGithub, FaTwitter, FaFacebook, FaSteam} from 'react-icons/fa'
import Header from "./header"
import "./layout.css"
import { IconContext } from "react-icons"
import { Flag} from 'semantic-ui-react'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: '90%',
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0
        }}
      >
        <main>{children}</main>
      </div>
        <footer className={"blackground"}>
          <IconContext.Provider value={{ color: "PowderBlue", className: "global-class-name", size: "2.5em" }}>
            <div className = "iconbanner">
              <div className = "icons">
                <a href="https://github.com/marksthespot4" className = "Icons" target="_blank"> <FaGithub/> </a>
              </div>
              <div className = "icons">
                <a href="https://www.facebook.com/mark.lim.1401" className = "Icons" target="_blank"> <FaFacebook/> </a>
              </div>
              <div className = "icons">
                <a href="https://twitter.com/CinnabonLim" className = "Icons" target="_blank"> <FaTwitter/> </a>
              </div>
              <div className = "icons">
                <a href="https://www.last.fm/user/marksthespot4" className = "Icons" target="_blank"> <FaLastfm/> </a>
              </div>
              <div className = "icons">
                <a href="https://steamcommunity.com/profiles/76561198107896505/" className = "Icons" target="_blank"> <FaSteam/> </a>
              </div>
            </div>
          </IconContext.Provider>
          <p className = "centered" style={{color:"PowderBlue"}}>
            © {new Date().getFullYear()}, Built by Mark Lim <Flag name={"us"}/>
          </p>
          <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        </footer>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
