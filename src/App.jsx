import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer"
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import { Container, Row, Col, Button } from "react-bootstrap";
import { TiSocialFacebookCircular, TiSocialLinkedinCircular, TiSocialGithubCircular } from "react-icons/ti";
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { SiHtml5, SiCss3, SiJavascript, SiPostgresql, SiGithub } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

function App() {
  return (
      
      <BrowserRouter>
      
      <Navbar bg="light" expand="lg" className="align-baseline fixed-top d-md-inline-block ">

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className="toggle">
      <Nav className="mr-auto ">
      <Link to="/">
<Navbar.Brand ><img src="./logo.png" width={30} alt="Logo MicoDigi"/></Navbar.Brand>
      </Link>
          
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
  </Navbar>
    <Container className="jumbotron fluid">
      <Row className="row">

        <Col sx={12} >
        
            <img src="./conback.jpg" height="200" alt="Francesco Micunco Picture" className="d-none d-md-block " style={{ "borderRadius": "30%" }} />
            <h4 className="text-light"><span className="span">f</span>rancesco <span className="span">m</span>icunco</h4>
            <div className="mt-xs-2 mt-md-4">
                <Button variant="success" className="mr-3">Contact</Button>
                <Button variant="outline-warning">See my projects</Button>
            </div>
       
        </Col>
        <Col sx={12}  >
        <h1 >MICODIGI</h1>
        <div className="d-block">

            <h3 className="mb-sm-4 mb-md-4">-- fullstack dev -- </h3>
            <p className="text-light">Hai bisogno di un sito internet veloce, responsivo e moderno?</p>
            <p className="text-light">Vuoi realizzare il tuo e-commerce personalizzato e versatile?</p>
            <p className="text-light">Ti serve un Backend sicuro, affidabile e solido, con l'impiego delle più moderne tecnologie?</p>
            <p className="text-light">Hai bisogno di Api personalizzate, con codice chiaro e ben commentato?</p>
        </div>
        <div className="mt-sm-3 mt-md-5">
            <p className="text-light"><SiHtml5 className="iconJ"  /> <SiCss3  className="iconJ"/> <SiJavascript  className="iconJ"/> <FaNodeJs className="iconJ" /> <SiPostgresql className="iconJ" /> <SiGithub className="iconJ" /></p>
        </div>

        </Col>

      </Row>
    </Container>
    <Container className="fluid subHero">
            <Row>
                <Col xs={12} md={4}>
                    <div>
                        <video  width="480" height="500" autoPlay loop>
                        <source src="./programming.mp4" type="video/mp4" />
                        </video>
                    </div>
                </Col>
                <Col xs={12} md={5}>
                    <div className="px-xs-3 px-md-5 py-xs-2 py-md-5" style={{backgroundColor:"green"}}>
                        <h2 style={{color:"black", fontWeight:"700"}}>Qualcosa su di me... </h2>
                        <p style={{color:"white", fontWeight:"400"}}>Sono un appassionato di informatica, ho fatto di questa passione, il mio lavoro. Il mio sistema di progettazione segue la strategia Agile, che consente la realizzazione del progetto in piccoli step funzionanti, aggiungendo nuove funzionalità ad ogni step successivo.</p>
                              
                    </div>
                </Col>
            </Row>
</Container>





    <Routes>
        <Route exact path="/"> </Route>
        <Route exact path="/english"></Route>
        <Route exact path="*">Page not found!</Route>
    </Routes>
    <Footer />
    </BrowserRouter>
   
  );
}

export default App;
