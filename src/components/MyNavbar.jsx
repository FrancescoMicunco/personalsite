import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { TiSocialFacebookCircular, TiSocialLinkedinCircular, TiSocialGithubCircular } from "react-icons/ti";

const MyNavBar = () => {
  return (
  
  <Navbar bg="light" expand="lg" className="align-baseline fixed-top">

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Link to="/">
  <Navbar.Brand ><img src="./logo.png" width={30} alt="Logo MicoDigi"/></Navbar.Brand>
  </Link>
{/* 
            <Link to="/">
                <p className="mx-4">Home</p>
            </Link> */}
            {/* <p >About</p> */}
            
            <TiSocialFacebookCircular className="d-sm-none d-md-inline-block my-md-auto" style={{fontSize:"1.2rem", color:"gray", marginRight:"0.5rem" }}/>
            <TiSocialLinkedinCircular className="d-sm-none d-md-block my-md-auto" style={{fontSize:"1.2rem", color:"gray", marginRight:"0.5rem"}}/>
            <TiSocialGithubCircular className="d-sm-none d-md-block my-md-auto" style={{fontSize:"1.2rem", color:"gray", marginRight:"0.5rem"}}/>
            <img src="https://flagcdn.com/w20/gb.png"
                 srcset="https://flagcdn.com/w40/gb.png 2x"
                 width="20"
                 height="15"
                 alt="Regno Unito" style={{marginRight:"0.5rem"}} className="my-md-auto"></img>
            <img
                    src="https://flagcdn.com/w20/it.png"
                    srcset="https://flagcdn.com/w40/it.png 2x"
                    width="20"
                    height="15"
                    alt="Italia" className="my-md-auto"></img>
                    
        </Nav>
    </Navbar.Collapse>
</Navbar>);
};

export default MyNavBar;
