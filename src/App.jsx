import "./App.css";
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/MyNavbar";
import Footer from "./components/Footer"
import Home from "./components/Home"
import {Route, Routes, BrowserRouter} from 'react-router-dom'

function App() {
  return (
      <div className="">
      <BrowserRouter>
    <MyNavBar />
    <Home />
    <Routes>
        <Route exact path="/"> </Route>
        <Route exact path="/:id"></Route>
        <Route exact path="*">Page not found!</Route>
    </Routes>
    <Footer />
    </BrowserRouter>
   </div>
  );
}

export default App;
