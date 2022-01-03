import {Col, Container, Row} from 'react-bootstrap'
import {TiMail, TiSocialFacebookCircular, TiSocialLinkedinCircular, TiSocialGithubCircular} from "react-icons/ti";

const Footer =()=>{
    return (
        <div style={{backgroundColor:"white"}}>
        <Container>
            <Row className="d-flex">
                <Col xs={12} md={4}><h2 style={{color:"black"}}>Contacts</h2>
                <ul>
                    <li >Via G. La Pira,23 70126-Bari Italia</li>
                    <li>P.Iva 05736870725 </li>
                    <li><TiMail style={{fontSize:"24px"}}/> francescomicunco@gmail.com</li>
                </ul>
                </Col>
                <Col xs={12} md={4}><h2 style={{color:"black"}}>Link</h2>
                <p style={{fontSize:"14px"}}>Privacy Policy</p>
                <p style={{fontSize:"14px"}}>Cookies Consent</p></Col>
                <Col xs={12} md={4}><h2 style={{color:"black"}}>Social</h2>
               
            <TiSocialFacebookCircular style={{fontSize:"24px"}}/>
            <TiSocialLinkedinCircular style={{fontSize:"24px"}}/>
            <TiSocialGithubCircular style={{fontSize:"24px"}}/></Col>
            </Row>
        </Container>
</div>)
}

export default Footer