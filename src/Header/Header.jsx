import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <div>
      <ul className='header-section'>
        
        
        
        
         <li><Link to='/Home'>Home</Link></li>
        <li><Link to='/Categorie'>Categories</Link></li>
        <li><input type="search" placeholder='search here....'/></li>
        <li><Link to="/Cart">Cart</Link></li>
       
      </ul>
    </div>
  )
}

export default Header

