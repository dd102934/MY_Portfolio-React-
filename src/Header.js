import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  state = { activeItem: 'My Portfolio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <Menu.Item name='My Portfolio' as={Link} to='/' active={activeItem === 'My Portfolio'} onClick={this.handleItemClick} />
        <Menu.Item  as={Link} to='/home'
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item as={Link} to='/about'
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        />
        <Menu.Item as={Link} to='/services'
          name='services'
          active={activeItem === 'services'}
          onClick={this.handleItemClick}
        />
        <Menu.Item as={Link} to='/contact'
          name='contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}

