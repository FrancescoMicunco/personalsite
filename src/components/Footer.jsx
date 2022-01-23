import {Col, Container, Row} from 'react-bootstrap'
import {TiMail, TiSocialFacebookCircular, TiSocialLinkedinCircular, TiSocialGithubCircular} from "react-icons/ti";
import {SiDiscord} from "react-icons/si"
import {GiVibratingSmartphone} from 'react-icons/gi'


const Footer =()=>{
    return (
        <div style={{backgroundColor:"white"}}>
        <Container>
            <Row className="d-flex pt-3">
                <Col xs={12} md={4}><h3 style={{color:"black"}}>Contacts</h3>
                <ul style={{listStyleType:"none"}}>
                    <li >Como - Italia</li>
                    <li>P.Iva 05736870725 </li>
                    <li><TiMail style={{fontSize:"24px"}}/> francescomicunco@gmail.com</li>
                    <li><GiVibratingSmartphone style={{fontSize:"24px"}}/>+39 350.189.1365</li>
                </ul>
                </Col>
                <Col xs={12} md={4}><h3 style={{color:"black"}}>Link</h3>
                <p style={{fontSize:"14px"}}>Privacy Policy</p>
                <p style={{fontSize:"14px"}}>Cookies Consent</p></Col>
                <Col xs={12} md={4}><h3 style={{color:"black"}}>Social</h3>
               
            <TiSocialFacebookCircular style={{fontSize:"24px"}}/>
            <TiSocialLinkedinCircular style={{fontSize:"24px"}}/>
            <TiSocialGithubCircular style={{fontSize:"24px"}}/>
            <SiDiscord style={{fontSize:"24px"}}/></Col>
            </Row>
        </Container>
</div>)
}

export default Footer