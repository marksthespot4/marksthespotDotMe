import React, { Component } from "react"
import Layout from "../components/layout"
import { Segment, Container} from 'semantic-ui-react'
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import resumeFile from "../images/ResumeFinalsCS.pdf"
import SEO from "../components/seo"

const resumePage = () => (
  <Layout>
    <SEO title={"Resume"}/>
    <div className = "banner">
      <h1 style = {{textAlign: "center"}}>Resume</h1>
    </div>
    <Segment style={{margin: "auto", marginTop:"1em"}} compact>
      <Document file={resumeFile}>
        <Page pageNumber={1}/>
      </Document>
    </Segment>
    <Container style={{marginTop:"1em"}} textAlign={"center"}>
      Click
      <a href={"https://drive.google.com/open?id=1MblC4yByyvEpKe6pbgFTk3Qf1kNPmdU7"}> here </a>
      to download this resume.
    </Container>
  </Layout>
)

export default resumePage