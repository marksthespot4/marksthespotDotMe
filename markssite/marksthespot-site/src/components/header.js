import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import { Menu } from "semantic-ui-react"
import "../stylesheets/header.css"
export default class Header extends Component {
  state = {}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render () {
    const { activeItem } = this.state
    return (
      <div className={"blackground"}>
        <Menu size='massive' borderless id="topNavMenu" inverted>
          <Link to="/">
            <Menu.Item
              name = "home"
              active={activeItem === 'home'}
              onClick={this.handleItemClick}

              >
              marksthespot.me
            </Menu.Item>
          </Link>

          <Menu.Menu position={'right'} >

          <Link to="/about-me/">
            <Menu.Item
              name='about-me'
              active={activeItem === 'about-me'}
              onClick={this.handleItemClick}
            >
              About Me
            </Menu.Item>
          </Link>
          <Link to="/resume/">
            <Menu.Item
              name='resume'
              active={activeItem === 'resume'}
              onClick={this.handleItemClick}
            >
              Resume
            </Menu.Item>
          </Link>
          <Link to="/projects/">
            <Menu.Item
              name='projects'
              active = {activeItem === 'projects'}
              onClick = {this.handleItemClick}
              >
              Projects
            </Menu.Item>
          </Link>
          <Link to='/fun/'>
            <Menu.Item
              name='fun'
              active = {activeItem === 'fun'}
              onClick = {this.handleItemClick}
              >
              Misc
            </Menu.Item>
          </Link>
          </Menu.Menu>
        </Menu>
      </div>

    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


