
import { Link } from 'react-router-dom'



function Menu() {
  return (
    <>
    
     <div className="b1">
        
      <p className ="p1">Just another WordPress site</p>
      <div className="b2">
      <i className="fa fa-phone-square"></i><p>1 (800) 567 8765</p> 
      <p>|</p>
      

      <i className="fa fa-envelope"></i><p>name@somemail.com</p> 
    </div>
    </div>
    <div className="b3">
        <img src="https://spalabele.wpengine.com/wp-content/uploads/2023/07/Spalab-logo.png" width="150px">
    </img>
    <ul className="menu">
        <li><Link to="/menu" className='link'>HOME</Link></li>
        <li><Link to="/about" className='link'>ABOUTUS</Link></li>
        <li><Link to="/products" className='link'>PRODUCTS</Link></li>
        <li><Link to="/projects"  className='link'>PROJECTS</Link></li>
              
      
        
        
        
        
        
            </ul>

    </div>
    </>
    )
    }
    export default Menu