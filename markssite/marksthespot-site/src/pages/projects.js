import React, { Component } from "react"
import Layout from "../components/layout"
import {Card, Image, Icon, Grid, Container} from 'semantic-ui-react'
import SEO from "../components/seo"
import rob1 from "../images/robot.jpg"
import rob2 from "../images/robotFront.jpg"
import soft from "../images/boilerSoftware.jpg"
import soft2 from "../images/wpf.jpg"
import bench from "../images/woodenBench.jpeg"

const ProjectPage = () => (
  <Layout>
    <SEO title={"Projects"}/>
    <div className = "banner">
      <h1 style = {{textAlign: "center"}}>Projects</h1>
    </div>
    <Grid columns="equal"centered>
      <Grid.Row stretched>
        <Grid.Column>
          <Card fluid className={"projCard"}>
            <Card.Content>
              <Image fluid src={soft}/>
              <Image fluid  src={soft2}/>
              <Card.Header >Boiler Simulation Software</Card.Header>
              <Card.Meta>Summer 2018, Summer 2020</Card.Meta>
              <Card.Description>
                .NET Framework Windows Forms and WPF work in C# and XAML
                <br/>Presented to clients about features and usability
                <br/>Added UI elements and troubleshooted errors

              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card fluid className={"projCard"}>
            <Card.Content>
              <Image fluid src={bench}/>
              <Card.Header>Wooden Bench</Card.Header>
              <Card.Meta>Summer 2019</Card.Meta>
              <Card.Description>Helped to prepare and assemble a wooden bench
              <br/>Painted, sanded, and screwed boards together
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row stretched>
        <Grid.Column>
          <Card fluid className={"projCard"}>
            <Card.Content>
              <Image fluid src={rob1}/>
              <Image fluid src={rob2}/>
              <Card.Header>Honors Engineering MACRO Moon Rover Project</Card.Header>
              <Card.Meta>Fall 2019</Card.Meta>
              <Card.Description>Developed an autonomous line-following robot with multiple sensors
              <br/>Served as main software lead of the Raspberry Pi unit
                <br/>Developed line-finding and path-finding algorithm in Python
                <br/> Click
                <a href={"https://docs.google.com/document/d/12Fr7ajQ0HqT4OVDpNAs6OCiT-DHkT2qwZMJ9elgKyXA/edit?usp=sharing"}> here </a>
                to view our final project report
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card fluid className={"projCard"}>
            <Card.Content>
              <Image src={""}/>
              <Card.Header>Bird Feeder</Card.Header>
              <Card.Meta>Summer 2020</Card.Meta>
              <Card.Description> Lorem Ipsum</Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Layout>
)

export default ProjectPage