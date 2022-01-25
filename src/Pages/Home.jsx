import {Container, Row, Col} from 'react-bootstrap'
import '../Style/home.css'
import React from 'react'
import {SiJavascript, SiHtml5,
    SiCss3,
    SiPostgresql,
    SiGithub,
    SiMongodb} from 'react-icons'

const Home = () =>{
    return (
        <Container fluid>
<Row className="justify-content-center" style={{backgroundColor:`black`}}>
    <Col xs={12} md={7} className="pt-md-5">
        <h2 style={{color:"white", paddingTop:"3rem", marginLeft:"3rem"}}>fullStack webDev</h2>
        <h1 style={{color:"yellow", marginLeft:"3rem", fontSize:"8rem"}}>MICODIGI</h1>
        <h4 style={{color:"white", marginLeft:"3rem", marginBottom:"1.5rem"}}>Ti serve un Back-end sicuro, affidabile e solido, 
con l'impiego delle più moderne tecnologie?</h4>
    <h4 style={{color:"white", marginLeft:"3rem", marginBottom:"1.5rem"}}>Sei un front-end e hai bisogno di Api personalizzate, 
con codice chiaro e ben commentato?</h4>
    <h4 style={{color:"white", marginLeft:"3rem", marginBottom:"1.5rem"}}>Hai bisogno di un sito internet veloce, 
responsivo e moderno?</h4>
{/* <div><p className="text-light">

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
</p></div> */}
    </Col>
    <Col xs={12} md={5}>
        <img src="../conback.png" className="w-100" alt="" />
    </Col>



</Row>

        </Container>
   
    )
}

export default Home