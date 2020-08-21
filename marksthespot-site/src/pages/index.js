
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Image, Button, Segment, Grid, Divider, Container, Checkbox} from 'semantic-ui-react'
import profile from "../images/profile.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className = "banner">
      <h1 style = {{textAlign: "center"}}>Home</h1>
    </div>



  </Layout>
)

export default IndexPage
