import { Container, Row, Col, Button} from "react-bootstrap"


const MyJumbotron = () =>{
return (
    <Container style={{height:"70vh", flexWrap:"nowrap", backgroundColor:"rgba(1, 1, 1, 0.6)", paddingTop:"5%", paddingLeft:"5%"}}>
        
        <Row>
            <Col xs={12} md={6} >
                <h1>MICODIGI</h1>
                <div className="d-block">
                    
                    <h3>fullstack dev</h3>
                    <p style={{color:"white"}}>irgneovno
                    cmvmpm psdovsmvsdivsdvss smvldsnvldskcns dldsdslkvndsàv dsidsnvs
                    </p>
                    <p style={{color:"white"}}>regievosivm wvnwein iencoiwnoiewnce ejoicnoiewnc</p>
                    <p style={{color:"white"}}>regievosivm wvnwein iencoiwnoiewnce ejoicnoiewnc</p>
                    <p style={{color:"white"}}>regievosivm wvnwein iencoiwnoiewnce ejoicnoiewnc</p>
                    <p style={{color:"white"}}>regievosivm wvnwein iencoiwnoiewnce ejoicnoiewnc</p>
                </div>
            </Col>

            <Col xs={12} md={6} style={{align:"right"}}><img src="./person.jfif" height="400" alt="" />
            <h2><span style={{fontSize:"54px"}}>f</span>rancesco <span style={{fontSize:"54px"}}>m</span>icunco</h2>
            <Button variant="success" className="mr-3">Contact</Button><Button variant="outline-warning">Warning</Button></Col>
        </Row>
        
    
    </Container>
)
}

export default MyJumbotron