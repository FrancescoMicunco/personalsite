import { Navbar, Nav } from 'react-bootstrap'
import '../Style/navbar.css'
import { Link } from 'react-router-dom'
import { TiSocialFacebookCircular, TiSocialLinkedinCircular, TiSocialGithubCircular } from "react-icons/ti";
import { SiDiscord } from "react-icons/si"
import React from "react";

const MyNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="justify-content-md-center">
      {/* <Link to="/"> */}
        <Navbar.Brand > <img src="./logo.png" width={30} alt="" /></Navbar.Brand>
      {/* </Link> */}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <div className='d-md-flex justify-content-around'>
            <div variant="light" className='d-md-flex'>
              {/* <Link to="/about"> */}
                <div >About</div>
              {/* </Link> */}
              {/* <Link to="/services"> */}
                <div>Services</div>
              {/* </Link> */}
              {/* <Link to="/testimonial"> */}
                <div>Testimonial</div>
              {/* </Link> */}
              {/* <Link to="/contact"> */}
                <div>Contact</div>
              {/* </Link> */}
            </div>

            <div  className='ml-md-5 d-md-flex'>
              <TiSocialFacebookCircular style={{ fontSize: "1.5rem", color: "white" }} />
              <TiSocialLinkedinCircular style={{ fontSize: "1.5rem", color: "white" }} />
              <TiSocialGithubCircular style={{ fontSize: "1.5rem", color: "white" }} />
              <SiDiscord style={{ fontSize: "1.5rem", color: "white" }} />
            </div>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default MyNavbar;






