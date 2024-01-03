import react from "react"
import About from  "./component/about"
import Contact from "./component/contact"
import Error from "./component/error"
import Home from "./component/home"
import {BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import './App.css:'

function App() {
  return (
    <Router>     
      
<div>
<h1>hi Ahmed</h1>
<Link to={"/"} >Home</Link>
<Link to={"/about"} >About</Link>
<Link to={"/contact"} >Contact</Link>
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/about" element={<About />}/>
  <Route path="/contact" element={<Contact />}/>
  <Route path="/*" element={<Error />}/>
  
  
</Routes>
</div>

       </Router>
    
  );
}

export default App;
