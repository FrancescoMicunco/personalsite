import {Col} from 'react-bootstrap'


const Experience = () =>{
    return (
        <>
        <Col xs={12} className="d-flex justify-content-between">
                            <h3>Javascript</h3>
                            <h3>80%</h3>
                        </Col>
                        <Col xs={12}>
                            <div style={{ backgroundColor: "green" }}>
                                <div style={{ border: "solid 10px yellow", width: "80%" }}></div>
                            </div>
                        </Col>
                        <Col xs={12} className="d-flex justify-content-between">
                            <h3>React</h3>
                            <h3>80%</h3>
                        </Col>
                        <Col xs={12}>
                            <div style={{ backgroundColor: "green" }}>
                                <div style={{ border: "solid 10px yellow", width: "90%" }}></div>
                            </div>
                        </Col>
                        <Col xs={12} className="d-flex justify-content-between">
                            <h3>NodeJs</h3>
                            <h3>80%</h3>
                        </Col>
                        <Col xs={12}>
                            <div style={{ backgroundColor: "green" }}>
                                <div style={{ border: "solid 10px yellow", width: "80%" }}></div>
                            </div>
                        </Col>
                        <Col xs={12} className="d-flex justify-content-between">
                            <h3>MongoDb & PostgreSQL</h3>
                            <h3>70%</h3>
                        </Col>
                        <Col xs={12}>
                            <div style={{ backgroundColor: "green" }}>
                                <div style={{ border: "solid 10px yellow", width: "70%" }}></div>
                            </div>
                        </Col>
</>
    )
}

export default Experience