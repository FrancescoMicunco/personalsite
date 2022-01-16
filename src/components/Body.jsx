import {Container, Row, Col} from 'react-bootstrap'


const Body = () =>{
    return (
        <>
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

</>
)}

export default Body