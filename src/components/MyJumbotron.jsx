import { Container, Row, Col, Button} from "react-bootstrap";
import {SiHtml5, SiCss3, SiJavascript, SiPostgresql, SiGithub} from "react-icons/si";
import {FaNodeJs} from "react-icons/fa";

const MyJumbotron = () =>{
return (
    <Container style={{height:"90vh", flexWrap:"nowrap", backgroundColor:"rgba(1, 1, 1, 0.6)", paddingTop:"5%", paddingLeft:"5%"}}>
        
        <Row>
            <Col xs={12} md={6} >
                <h1>MICODIGI</h1>
                <div className="d-block">
                    
                    <h3 style={{marginBottom:"30px"}}>-- fullstack dev -- </h3>
                    <p style={{color:"white"}}>Sito internet veloce, responsivo e moderno</p>
                    <p style={{color:"white"}}>Realizzo il tuo e-commerce personalizzato e versatile</p>
                    <p style={{color:"white"}}>Backend sicuro, affidabile e versatile, con l'impiego delle più moderne tecnologie</p>
                 </div>   
                    <div className="mt-xs-3 mt-md-5">
                    <p style={{color:"white"}}><SiHtml5 style={{fontSize:"40px"}}/> <SiCss3 style={{fontSize:"40px"}}/> <SiJavascript style={{fontSize:"40px"}}/> <FaNodeJs style={{fontSize:"40px"}}/> <SiPostgresql style={{fontSize:"40px"}}/> <SiGithub style={{fontSize:"40px"}}/></p>
                </div>

            </Col>

            <Col xs={12} md={6} style={{align:"right"}}><img src="./person.jfif" height="500" alt="" />
                <h2 className="mt-xs-2 mt-md-4"><span style={{fontSize:"64px"}}>f</span>rancesco <span style={{fontSize:"64px"}}>m</span>icunco</h2>
                <div className="mt-xs-2 mt-md-4">
                    <Button variant="success" className="mr-3">Contact</Button>
                    <Button variant="outline-warning">See my projects</Button>
                </div>
            </Col>
            
        </Row>
        
    
    </Container>
)
}

export default MyJumbotron