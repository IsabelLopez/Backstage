import React, { Component} from 'react'
import { Link } from "gatsby"
import Logo from "../images/Logo.png"
import "./Navbar.css"
// import { AnchorLink } from "gatsby-plugin-anchor-links";

import { Menu, X } from 'react-feather'
import { Location } from '@reach/router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
// Disable the auto CSS insertion
config.autoAddCss = false


const ListLink = props => (
    <li>
        <Link to={props.to}>{props.children}</Link>
    </li>
);

export class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openMenu: false,
            backgroundClass: ''
        };
    }

    state = {
      active: false,
      activeSubNav: false,
      currentPath: false,
    }

    handleScroll = () => {
        const { visibilityClass } = this.state;
        if (window.pageYOffset > 300) {
            if (visibilityClass !== 'navbar-shrink') {
                this.setState({ visibilityClass: 'navbar-shrink' });
            }
        } else {
            if (visibilityClass === 'navbar-shrink') {
                this.setState({ visibilityClass: '' });
            }
        };

    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.setState({ currentPath: this.props.location.pathname })
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }


  handleMenuToggle = () => this.setState({ active: !this.state.active })

  // Only close nav if it is open
  handleLinkClick = () => this.state.active && this.handleMenuToggle()
  // keyboard events
  handleLinkKeyDown = ev => {
    if (ev.keyCode === 13) {
      this.state.active && this.handleMenuToggle()
    }
  }

  toggleSubNav = subNav =>
    this.setState({
      activeSubNav: this.state.activeSubNav === subNav ? false : subNav
    })
  keyToggleSubNav = (e, subNav) => {
    // key o is for open so you can enter key to open
    if (e.keyCode === 79 || e.keyCode === 27) {
      this.toggleSubNav(subNav)
    }
  }



    render() {
        const { backgroundClass } = this.state;
        const { active} = this.state,
          { subNav } = this.props,

          NavLink = ({to, className, children, ...props }) => (
            <Link
              to={to}
              className={`NavLink ${ to === this.state.currentPath ? 'active' : ''}${className}`}
              onClick={this.handleLinkClick}
              onKeyDown={this.handleLinkKeyDown}
              tabIndex={0}
              aria-label="Navigation"
              role="button"
              {...props}
            >
              {children}
            </Link>
          )

         return (
          <nav className={`Nav ${backgroundClass} ${active ? 'Nav-active' : ''}`} id="navbar">
            <div className='Nav--Container ' >
                <NavLink
                  to='/'
                >
                  <img src={Logo} className='nav-logo' alt='EC Horses'/>
                </NavLink>

                <div  className='Nav--Links' >

                  <div className="navitems">
                    <NavLink to='#' className="navlink">
                        SOMOS BACKSTAGE
                    </NavLink>

                    <NavLink to='#' className="navLink">
                      CLASES
                    </NavLink>

                    <NavLink to='#' className="navlink">
                      FOTOS
                    </NavLink>

                    <NavLink to='#' className="navlink">
                      CONTÁCTANOS
                    </NavLink>


                  </div>

                  <div className="social-media">
                    <a className="nav-icon" alt="Instagram icon" href="https://www.instagram.com/ec.horses/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faInstagram} className="fa-fw" />
                    </a>
                    <a className="nav-icon" alt="Facebook icon" href="https://www.facebook.com/ec.horses17" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faFacebookSquare} className="fa-fw" />
                    </a>
                    <a className="nav-icon" alt="Youtube icon" href="https://www.youtube.com/channel/UCSaoMvPuMr3gzUjh32qWGbg" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faYoutubeSquare} className="fa-fw" />
                    </a>
                  </div>


               </div>

                <button
                  className='Button-blank Nav--MenuButton'
                  onClick={this.handleMenuToggle}
                  tabIndex={0}
                  aria-label='Navigation'
                >
                  {active ? <X /> : <Menu size={30}  />}
                </button>
              </div>
            </nav>
           )
         }
      }

      export default ({subNav}) => (
         <Location>{route => <Navigation subNav={subNav} {...route} />}</Location>
      )
