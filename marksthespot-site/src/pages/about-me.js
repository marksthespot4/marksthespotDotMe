import React from "react"
import { Link } from "gatsby"
import { Grid,Segment, Icon, Reveal,Image} from 'semantic-ui-react'
import Layout from "../components/layout"
import profile from "../images/profile.jpg"
import SEO from "../components/seo"

const aboutMePage = () => (
  <Layout>
    <SEO title="About Me" />
    <div className = "banner">
      <h1 style = {{textAlign: "center"}}>About Mark Lim</h1>
    </div>
    <Grid columns={"equal"} divided>
      <Grid.Row>
        <Grid.Column>
          <Reveal animated={"move"}>
            <Reveal.Content hidden>
              <Segment className ={"slideyBoy"} >
                <h2 className={"aboutMeHeadings"}>Contact and Quick Facts</h2>
                <p> <Icon circular name={"phone"}/>765-714-1864</p>
                <p> <Icon circular name={"mail"}/><a href={"mailto:lim279@purdue.edu"}>lim279@purdue.edu</a></p>
                <p> <Icon circular name={"map marker"}/>3330 Humboldt, West Lafayette, IN</p>
                <p> <Icon circular name={"university"}/>Purdue University</p>
                <p> <Icon circular name={"briefcase"}/>Computer Science</p>
                <p> <Icon circular name={"star"} />Gemini</p>
                <p style = {{textAlign: "center", fontStyle: "italic"}}> My Current Favorites</p>
                <p> <Icon circular name={"music"}/>OK Computer - Radiohead </p>
                <p> <Icon circular name={"film"}/>Better Call Saul</p>
                <p> <Icon circular name={"tv"}/>30 Rock</p>

              </Segment>
            </Reveal.Content>
            <Reveal.Content visible>
              <Image src={profile} size={"large"} className={"slideyBoy"} rounded/>
            </Reveal.Content>
          </Reveal>
        </Grid.Column>
        <Grid.Column>
          <Segment>
          <h2 className={"aboutMeHeadings"}>Welcome!</h2>
          </Segment>

        </Grid.Column>
        <Grid.Column>
          <Segment>
            <h2 className={"aboutMeHeadings"}> Blurb </h2>
            <p className ={"aboutMeText"}> Hi! I'm a Purdue student majoring in Computer Science and always looking
            for new opportunities to grow my skills and create new things. </p>
            <p className ={"aboutMeText"}>I began to learn C++ and the fundamentals of object oriented programming at a young age,
              and jumped at every chance to broaden my horizons in the computer science world. I'm currently enrolled in the introductory Java
            course at Purdue.</p>
            <p className ={"aboutMeText"}>
              I’ve accumulated experience with many languages, from writing engineering projects in Python and MATLAB,
              helping develop a commercial boiler simulation software in C# and the .net framework,
              done independent small projects with Arduinos and Raspberry Pis,
              and most recently, this website! </p>
              <p className ={"aboutMeText"}>I'm using the Gatsby framework, Google Cloud services, and writing in HTML and CSS.</p>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          This is less than one percent
        </Grid.Column>
        <Grid.Column>
          This one was a survey as well
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          This is ridicuous
        </Grid.Column>
      </Grid.Row>

    </Grid>

  </Layout>

)

export default aboutMePage