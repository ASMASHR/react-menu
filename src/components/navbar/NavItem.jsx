
import './navbar.css';
import {React,useState} from 'react';
function Navitem(props) {
    const [open,setOpen]=useState(false)
    console.log(props.children)
  return (
        <li className="nav-item">
            <button className='icon-button' onClick={()=>setOpen(!open)}>
                {props.icon}
            </button>
            {open && props.children}

        </li>
    
  );
}

export default Navitem;
