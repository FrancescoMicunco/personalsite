import MyJumbotron from "./MyJumbotron"
import Body from "./Body"
import { Container, Row, Col } from 'react-bootstrap'


const Home = () => {
    return (
        <Container>
            <Row>
                <Col sm={12}>
                    <MyJumbotron />
                    
                </Col>
                <Col sm={12}>
                    <Body />
                    
                </Col>

            </Row>
          
        </Container>



    )

}

export default Home