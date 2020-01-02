import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"

import PaulSong from "../images/PaulSong.png"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
    this.setModal = this.setModal.bind(this);
  }

  handlePortfolioClick(index, e) {
    e.preventDefault();
    this.setModal(true, index);
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current
    });
  }

  render() {
    return (
      <Layout>
        <SEO title="Portfolio"/>

        <section id="portfolio">
          <div className="container-fluid py-3 text-center">
            <h2>Latest Projects</h2>
            <hr className="divider" />
            <div className="row no-gutters">
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="#" onClick={this.handlePortfolioClick.bind(this, 0)}>
                  <Img fluid={this.props.data.images.edges[0].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      3D Animation - Blender
                    </div>
                    <div className="project-name">
                      Final Project
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="#" onClick={this.handlePortfolioClick.bind(this, 1)}>
                  <Img fluid={this.props.data.images.edges[1].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      3D Animation - Blender
                    </div>
                    <div className="project-name">
                      Final Project
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="#" onClick={this.handlePortfolioClick.bind(this, 2)}>
                  <Img fluid={this.props.data.images.edges[2].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      3D Animation - Blender
                    </div>
                    <div className="project-name">
                      Final Project
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="#" onClick={this.handlePortfolioClick.bind(this, 3)}>
                  <Img fluid={this.props.data.images.edges[3].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      3D Animation - Blender
                    </div>
                    <div className="project-name">
                      Final Project
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="#" onClick={this.handlePortfolioClick.bind(this, 4)}>
                  <Img fluid={this.props.data.images.edges[4].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      3D Modelling - Blender
                    </div>
                    <div className="project-name">
                      Fur Test
                    </div>
                  </div>
                </a>
              </div>
              {/* <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="#" onClick={this.handlePortfolioClick.bind(this, 5)}>
                  <Img fluid={this.props.data.images.edges[5].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption p-3">
                    <div className="project-category text-white-50">
                      3D Animation - Blender
                    </div>
                    <div className="project-name">
                      Final Project
                    </div>
                  </div>
                </a>
              </div> */}
            </div>
          </div>
        </section>

        <section className="page-section" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <img src={PaulSong} alt={'Paul Song'} id={'profile-image'} />
                <h2 className="mt-0">
                  Hi, I'm Paul
                </h2>
                <hr className="divider my-4"/>
                <p className="text-muted mb-4">
                  Born in Seoul and raised in Vancouver, I enjoy making projects come to life.
                  Music with synthesizers, electronics with microcontrollers, and vast worlds with 3D modeling.
                  After getting a taste of VFX at Intersections Media, I'm passionate about making it my career.
                </p>
                <a className="btn btn-primary btn-xl" href="#page-top"
                  onClick={Scroller.handleAnchorScroll}>Resume</a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">
                  Get In Touch!
                </h2>
                <hr className="divider my-4"/>
                <p className="text-white mb-5">
                  Got a project you think I should work on? Send me a message!
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-sm text-center mb-5 mb-lg-4" style={{ flexGrow: 0.2, }}>
                <i className="fas fa-envelope fa-3x mb-3 text-white"></i>
                <a className="d-block" href="mailto:meltypan@gmail.com">
                  meltypan@gmail.com
                </a>
              </div>
              <div className="col-sm text-center mb-5 mb-lg-4" style={{ flexGrow: 0.2, }}>
                <i className="fab fa-instagram fa-3x mb-3 text-white"></i>
                <a className="d-block" href="https://www.instagram.com/revonrev">
                  @revonrev
                </a>
              </div>
              {/* <div className="col-lg text-center mb-5 mb-lg-4">
                <i className="fab fa-linkedin fa-3x mb-3 text-white"></i>
                <a className="d-block" href="https://www.linkedin.com/">
                  Paul Song
                </a>
              </div> */}
            </div>
          </div>
        </section>
        <PortfolioModal show={this.state.modalShow} onHide={() => this.setModal(false, 0)}>
          <PortfolioCarousel images={this.props.data.images.edges} current={this.state.modalCurrent}/>
        </PortfolioModal>
      </Layout>
    )
  }
}


export const imageData = graphql`
  query {
    images: allFile(filter: {relativePath: {glob: "portfolio/fullsize/*.png"}}, sort: {fields: name}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
