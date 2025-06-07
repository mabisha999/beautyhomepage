
import {Routes,Route,BrowserRouter} from "react-router-dom";
import Count from "./Count.jsx";
import Aboutus from "./Aboutus.jsx";
import Home from "./Home.jsx";
import Flower from "./Flower.jsx";
import Project from "./Project.jsx";
import Todo from "./Todo.jsx";
import Button from "./Button.jsx";
import Project1 from"./Project1.jsx";
 import  './Mystyle3.css';
import  './My1style.css';
import './Mystyle4.css';
import './Mystyle1.css';
function App() {
  return (
    <>

  <Routes>   
    
<Route path="/" element={<Home/>}/>
    
    
<Route path="/menu" element={<Home/>}/>
  
  <Route path="/products" element={<Flower />}/> 
    <Route   path="/about" element={<Aboutus />} />
   <Route path="/projects" element={<Project/>}/>
   <Route path="/api1" element={<Button/>}/>
   <Route path="/todos" element={<Todo/>}/>
   <Route path="/form" element={<Count/>}/>
   <Route path="/project" element={<Project1/>}/>
  </Routes>

  </>
  )
}

export default App
