import { Routes, Route } from "react-router-dom";
import Menu from "./Componet/Menu";
import Home from "./Componet/Home";
import About from "./Componet/About";
import Services from "./Componet/Services";
import Contact from "./Componet/Contact";
import More from "./Componet/More";
import "./App.css";

function App() {
  return (
    <>

      
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="about" element={<About />} ></Route>
        <Route path="Services" element={<Services />} ></Route>
        <Route path="contact" element={<Contact />} ></Route>
        <Route path="more" element={<More />} ></Route>
      </Routes>
    </>
  );
}

export default App;
