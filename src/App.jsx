import React from "react";
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer"
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Testimonial from './Pages/Testimonial'
import Contact from './Pages/Contact'
import MyNavbar from './components/MyNavbar'



function App() {
  return (
<>
    
      <MyNavbar />
      <Home />
     <About />
     <Services />
     <Testimonial />
     <Contact />
    <Footer />
</>
  );
}

export default App;



// icons section with tooltip
{/* <div className="mt-sm-3 mt-md-5">
              <p className="text-light">

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
              </p>
            </div> */}
