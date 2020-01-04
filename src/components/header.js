import React from "react"
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Scrollspy from "react-scrollspy"
import { Navbar, Nav } from "react-bootstrap"
import Scroller from './scroller'
import logo from '../images/ps-icon.png'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this);
  }

  render() {
    return (
      <>
        <Navbar className="navbar navbar-expand-lg navbar-light fixed-top py-2" id="mainNav" expand="lg"
                collapseOnSelect={true}>
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top" onClick={Scroller.handleAnchorScroll}>
              <img src={logo} alt={'Paul Song logo'} style={{ height: 40, width: 40 }} />&nbsp;&nbsp;Paul Song
            </a>
            <Navbar.Toggle aria-controls="navbarResponsive"/>
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="navbar-nav ml-auto my-2 my-lg-0">
                <Scrollspy className="navbar-nav"
                           items={["portfolio", "about", "contact"]}
                           currentClassName="active" rootEl={"#mainNav"} offset={-75}>
                  {/* <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#services" onClick={Scroller.handleAnchorScroll}>Services</Nav.Link>
                  </li> */}
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#portfolio" onClick={Scroller.handleAnchorScroll}>Portfolio</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#about" onClick={Scroller.handleAnchorScroll}>About</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#contact" onClick={Scroller.handleAnchorScroll}>Contact</Nav.Link>
                  </li>
                </Scrollspy>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10 align-self-end">
              <Fade duration={4000}>
              <Slide left duration={2000}>
                <hr className="dividerzoom my-3" />
              </Slide>
              </Fade>
              <Fade>
              <Zoom>
                <h1 className="text-uppercase text-white font-weight-bold">
                  Paul Song
                </h1>
              </Zoom>
              </Fade>
              <Fade duration={4000}>
              <Slide right duration={2000}>
                <hr className="dividerzoom my-3" />
              </Slide>
              </Fade>
              </div>
              <div className="col-lg-8 align-self-baseline">
              <Fade bottom delay={1000}>
                <p className="text-white-75 font-weight-light mb-5">
                  I like to make 3D models, animations and music!
                </p>
              </Fade>
                <a className="btn js-scroll-trigger" href="#portfolio" onClick={Scroller.handleAnchorScroll}>
                  <i class="fas fa-chevron-down text-white"></i>
                </a>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
