import {Navbar, Nav} from 'react-bootstrap'
import '../Style/navbar.css'
import {Link} from 'react-router-dom'
import { TiSocialFacebookCircular, TiSocialLinkedinCircular, TiSocialGithubCircular } from "react-icons/ti";
import {SiDiscord} from "react-icons/si"
import React from "react";

const MyNavbar= () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="justify-content-md-center">
    <Navbar.Brand > <img src="./logo.png" width={30} alt="" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#features">Services</Nav.Link>
      <Nav.Link href="#pricing">Testimonial</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
      <div d-flex className='ml-md-5'>
      <TiSocialFacebookCircular  style={{fontSize:"1.5rem", color:"white"}}/>
      <TiSocialLinkedinCircular style={{fontSize:"1.5rem", color:"white"}}/>
      <TiSocialGithubCircular style={{fontSize:"1.5rem", color:"white"}}/>
      <SiDiscord style={{fontSize:"1.5rem", color:"white"}}/>
      </div>
    </Nav>
    </Navbar.Collapse>
  </Navbar>
)}
export default MyNavbar;






