import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { TiSocialFacebookCircular, TiSocialLinkedinCircular, TiSocialGithubCircular } from "react-icons/ti";

const MyNavBar = () => {
  return (<Navbar bg="light" expand="lg">
<Link to="/">
  <Navbar.Brand ><img src="./logo.png" width={70} alt="" /></Navbar.Brand>
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
            <TiSocialGithubCircular /></div>
        </Nav>
    </Navbar.Collapse>
</Navbar>);
};

export default MyNavBar;
