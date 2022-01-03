import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { TiSocialFacebookCircular, TiSocialLinkedinCircular, TiSocialGithubCircular } from "react-icons/ti";

const MyNavBar = () => {
  return (<Navbar bg="light" expand="lg">
<Link to="/">
  <Navbar.Brand ><img src="./logo.png" width={70} alt="Logo MicoDigi"/></Navbar.Brand>
  </Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Link to="/">
                <p className="mx-4">Home</p>
            </Link>
            <p >About</p>
            <div className='icons'>
            <TiSocialFacebookCircular />
            <TiSocialLinkedinCircular />
            <TiSocialGithubCircular />
            <img src="https://flagcdn.com/w20/gb.png"
                 srcset="https://flagcdn.com/w40/gb.png 2x"
                 width="20"
                 height="15"
                 alt="Regno Unito"></img>
                 <img
                    src="https://flagcdn.com/w20/it.png"
                    srcset="https://flagcdn.com/w40/it.png 2x"
                    width="20"
                    height="15"
                    alt="Italia"></img>
                    </div>
        </Nav>
    </Navbar.Collapse>
</Navbar>);
};

export default MyNavBar;
