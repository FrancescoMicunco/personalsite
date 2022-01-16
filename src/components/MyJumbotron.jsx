import { Container, Row, Col, Button } from "react-bootstrap";
import { SiHtml5, SiCss3, SiJavascript, SiPostgresql, SiGithub } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const MyJumbotron = () => {
    return (
        <Container className="jumbotron">

            <Row>

                <Col sm={12} md={6} className="pb-4">
                    
                        <img src="./conback.jpg" height="200" alt="Francesco Micunco Picture" className="d-none d-md-block " style={{ "borderRadius": "30%" }} />
                        <h4 className="mt-sm-4 mt-md-4 text-light"><span>f</span>rancesco <span>m</span>icunco</h4>
                        <div className="mt-xs-2 mt-md-4">
                            <Button variant="success" className="mr-3">Contact</Button>
                            <Button variant="outline-warning">See my projects</Button>
                        </div>

                    
                </Col>



                <Col sm={12} md={6} >
                    <h1 >MICODIGI</h1>
                    <div className="d-block">

                        <h3 style={{ marginBottom: "30px" }}>-- fullstack dev -- </h3>
                        <p style={{ color: "white" }}>Hai bisogno di un sito internet veloce, responsivo e moderno?</p>
                        <p style={{ color: "white" }}>Vuoi realizzare il tuo e-commerce personalizzato e versatile?</p>
                        <p style={{ color: "white" }}>Ti serve un Backend sicuro, affidabile e solido, con l'impiego delle più moderne tecnologie?</p>
                        <p style={{ color: "white" }}>Hai bisogno di Api personalizzate, con codice chiaro e ben commentato?</p>
                    </div>
                    <div className="mt-xs-3 mt-md-5">
                        <p style={{ color: "white" }}><SiHtml5 style={{ fontSize: "40px" }} /> <SiCss3 style={{ fontSize: "40px" }} /> <SiJavascript style={{ fontSize: "40px" }} /> <FaNodeJs style={{ fontSize: "40px" }} /> <SiPostgresql style={{ fontSize: "40px" }} /> <SiGithub style={{ fontSize: "40px" }} /></p>
                    </div>

                </Col>


            </Row>


        </Container>
    )
}

export default MyJumbotron