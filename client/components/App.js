import React from 'react'
import {Navbar, Nav, NavItem, Jumbotron} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import NotificationContainer from '../containers/NotificationContainer'
import * as urls from '../../common/urls'


const App = React.createClass({
  componentDidMount() {
    this.props.getUserProfile()
  },

  renderNavbar() {
    const profile = this.props.profile || {}
    return (
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              MinskyTrain
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/levels"><NavItem>
                Zoznam levelov
              </NavItem></LinkContainer>
              <LinkContainer to="/tutorial"><NavItem>
                Tutoriál
              </NavItem></LinkContainer>
            </Nav>
            <Nav pullRight>
              {profile.loggedIn === true && (<Navbar.Text>{profile.username}</Navbar.Text>)}
              {profile.loggedIn === true && (<NavItem href={`.${urls.logout}`}>
                Odhlásiť
              </NavItem>)}
              {profile.loggedIn === false && (<NavItem href={`.${urls.login}`}>
                Prihlásiť (cez Trojsten)
              </NavItem>)}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
  },

  renderLogin() {
    return (
      <div className='center'>
        <p style={{fontSize: '200%'}}>
          Na použitie aplikácie je nutné
          &nbsp;<a href={`.${urls.login}`}>prihlásenie</a>.
        </p>
      </div>
    )
  },

  renderBody() {
    if (!this.props.profile) {
      return null
    }
    if (this.props.profile.loggedIn) {
      return this.props.children
    } else {
      return this.renderLogin()
    }
  },

  render() {
    return (
      <div className='App'>
        {this.renderNavbar()}
        {this.renderBody()}
        <NotificationContainer/>
      </div>
    )
  },
})

export default App
