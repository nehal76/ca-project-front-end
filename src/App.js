import "./App.css";
import Header from "./Components/Header";
import Services from "./Components/Services/Services";
import Home from './Components/Home';
import Contactus from "./Components/Contact/Contactus";
import Footer from './Components/Footer/Footer'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import About from "./Components/About";
import About_shuaib from "./About_shuaib/About_shuaib";

function App() {
  return (
    <>
    
    <Router>
        <Header></Header>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/About" element={<About/>} />   
          <Route path="/About_shuaib" element={<About_shuaib/>} /> 
                 
        </Routes>
        
        <Footer/>
      
    </Router>
    
    </>
  );
}

export default App;
