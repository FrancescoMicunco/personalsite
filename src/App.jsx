import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer"
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Container, Row, Col, Button } from "react-bootstrap";
import { TiSocialFacebookCircular, TiSocialLinkedinCircular, TiSocialGithubCircular } from "react-icons/ti";
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { SiHtml5, SiCss3, SiJavascript, SiPostgresql, SiGithub, SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
// import Tooltip from '@mui/material/Tooltip';
import ReactTooltip from "react-tooltip";

function App() {
  return (

    <BrowserRouter>
      <div className="navBar">
        <Navbar bg="light" expand="lg" className="align-baseline fixed-top d-md-inline-block ">

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="toggle">
            <Nav className="mr-auto ">
              <Link to="/">
                <Navbar.Brand ><img src="./logo.png" width={30} alt="Logo MicoDigi" /></Navbar.Brand>
              </Link>

              <TiSocialFacebookCircular className="d-sm-none d-md-inline-block my-md-auto" style={{ fontSize: "1.2rem", color: "gray", marginRight: "0.5rem" }} />
              <TiSocialLinkedinCircular className="d-sm-none d-md-block my-md-auto" style={{ fontSize: "1.2rem", color: "gray", marginRight: "0.5rem" }} />
              <TiSocialGithubCircular className="d-sm-none d-md-block my-md-auto" style={{ fontSize: "1.2rem", color: "gray", marginRight: "0.5rem" }} />
              <img src="https://flagcdn.com/w20/gb.png"
                srcset="https://flagcdn.com/w40/gb.png 2x"
                width="20"
                height="15"
                alt="Regno Unito" style={{ marginRight: "0.5rem" }} className="my-md-auto"></img>
              <img
                src="https://flagcdn.com/w20/it.png"
                srcset="https://flagcdn.com/w40/it.png 2x"
                width="20"
                height="15"
                alt="Italia" className="my-md-auto"></img>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <Container fluid className="jumbotron">
        <Row >
          <Col xs={12} md={6} style={{ textAlign: "center" }}>

            <img className="jImage" fluid src="./conback.jpg" alt="Francesco Micunco" />

            <div className="d-md-none">
              <h3 className="mb-sm-4 mb-md-4">-- fullstack dev -- </h3>
              <p className="pback ">Hai bisogno di un sito internet veloce, responsivo e moderno?</p>
              <p className="pback">Vuoi realizzare un e-commerce personalizzato e versatile?</p>
              <p className="pback">Ti serve un Backend sicuro, affidabile e solido, con l'impiego delle più moderne tecnologie?</p>
              <p className="pback">Sei un front-end e hai bisogno di Api personalizzate, con codice chiaro e ben commentato?</p>
            </div>

            <h4 className="text-light"><span className="span">f</span>rancesco <span className="span">m</span>icunco</h4>
            <Button variant="success" className="mr-3">Contact</Button>
            <Button variant="outline-warning">See my projects</Button>
            <div className="d-md-none" style={{ marginTop: "1.2rem" }}>
              <p className="text-light"><SiHtml5 className="iconJ" /> <SiCss3 className="iconJ" /> <SiJavascript className="iconJ" /> <FaNodeJs className="iconJ" /> <SiPostgresql className="iconJ" /> <SiGithub className="iconJ" /></p>
            </div>
          </Col >

          <Col xs={12} md={6}>
            <h1 >MICODIGI</h1>
            <h3 className="mb-sm-4 mb-md-4">-- fullstack dev -- </h3>
            <p className="text-light">Hai bisogno di un sito internet veloce, responsivo e moderno?</p>
            <p className="text-light">Vuoi realizzare il tuo e-commerce personalizzato e versatile?</p>
            <p className="text-light">Ti serve un Backend sicuro, affidabile e solido, con l'impiego delle più moderne tecnologie?</p>
            <p className="text-light">Hai bisogno di Api personalizzate, con codice chiaro e ben commentato?</p>
            <div className="mt-sm-3 mt-md-5">
              <p className="text-light">

               <ReactTooltip id="html5" place="bottom" effect="solid">HTML5</ReactTooltip>
                <SiHtml5 className="iconJ" data-tip data-for="html5" />

                <ReactTooltip id="css3" place="bottom" effect="solid">CSS3</ReactTooltip>
                <SiCss3 className="iconJ" data-tip data-for="css3" />

                <ReactTooltip id="javascript" place="bottom" effect="solid">JAVASCRIPT</ReactTooltip>
                <SiJavascript className="iconJ" data-tip data-for="javascript" />

                <ReactTooltip id="react-js" place="bottom" effect="solid">REACT-JS</ReactTooltip>
                <FaNodeJs className="iconJ" data-tip data-for="react-js" />

                <ReactTooltip id="postgre-sql" place="bottom" effect="solid">POSTGRE-SQL</ReactTooltip>
                <SiPostgresql className="iconJ" data-tip data-for="postgre-sql" />

                <ReactTooltip id="github" place="bottom" effect="solid">GITHUB</ReactTooltip>
                <SiGithub className="iconJ" data-tip data-for="github" />

                <ReactTooltip id="mongodb" place="bottom" effect="solid">MONGO-DB</ReactTooltip>
                <SiMongodb className="iconJ" data-tip data-for="mongodb" />
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid >
        <Row>

          <Col className="my-1 px-md-0" style={{ backgroundColor: "green" }}>
            <Row>
              <Col xs={12} md={6} className="py-3 py-md-5 px-3 px-md-5"><h2 className="subHeroh2" >Qualcosa su di me... </h2>
                <p className="py-3" style={{ color: "white", fontWeight: "400" }}>Sono da sempre appassionato di informatica e ho fatto di questa passione, il mio lavoro. <br></br>Il mio sistema di progettazione segue la strategia Agile, che prevede la realizzazione di piccoli step già operativi, aggiungendo nuove funzionalità ad ogni passaggio successivo.</p></Col>
              <Col xs={12} md={6} className="py-sx-3 py-md-5 px-sx-3 px-md-5"><img src="../code.jpg" width="400px" alt="" /></Col>
            </Row>
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
