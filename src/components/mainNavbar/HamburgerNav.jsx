
import './style.css';

import {ReactComponent as Circle} from '../../icons/circles.svg'
import { useState } from 'react';

function HamburgerNav() {
  const [menuOpen,setMenuOpen]=useState(false)
  return (
    <nav>
      <div className='hamburger' onClick={()=>setMenuOpen(!menuOpen)}>
        <div className={"line " + (menuOpen && "close")}></div>
        <div className={"line " + (menuOpen && "close")}></div>
        <div className={"line "  + (menuOpen && "close")}></div>
      </div>
      <ul className={"nav-links-responsive " +(menuOpen && "active")}>
        <li className={(menuOpen && "fade")}><a href="">About</a></li>
        <li className={(menuOpen && "fade")}><a href="">Contact</a></li>
        <li className={(menuOpen && "fade")}> <a href=""> Projects</a></li>
      </ul>
      
      <ul className='nav-links'>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
        <li> <a href=""> Projects</a>
        </li>

      </ul>
    </nav>

  );
}

export default HamburgerNav;
