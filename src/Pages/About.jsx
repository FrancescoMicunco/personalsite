import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Experience from '../components/experience'
import '../Style/about.css'

const About = () => {

    return (
        <Container fluid >
            <Row className="justify-content-center">
                <Col xs={12} md={6} style={{
                    backgroundImage: "url('../processor.jpg')", backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>

                </Col>
                <Col xs={12} md={6} className="py-md-5 px-md-5">
                    <h2>About me</h2>
                    <p>Ho una esperienza consulenziale pluriennale, sviluppata in contesti differenti, passando dalla finanza alle start-up. Questo mi consente di fornire un servizio di ampio respiro in ambito di sviluppo, che non si esaurisce nella mera, seppur efficace, scrittura del codice, ma si estende anche alla pianificazione strategica del progetto</p>

                    <p>Sviluppo codice con le più moderne tecnologie, che rendono il progetto altamente efficace, veloce, e scalabile. Ogni componente viene testato e validato, per ridurre al massimo il rischio di eventuali malfunzionamenti.  </p>
                    <div style={{ border: "solid 0.5px gray" }}></div>
                   
                        <Experience />
                </Col>
            </Row>

        </Container>

    )

}
export default About