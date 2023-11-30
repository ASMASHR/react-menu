import './navbar.css';
import {React,useState} from 'react';
function DropDownItem(props) {
console.log(props.children)
  return (
        <a href="#" className="menu-item" onClick={()=>props.goToMenu && props.setActiveMenu(props.goToMenu)}>
            <span className='icon-button'>{props.leftIcon}</span> 
            {props.children}
            <span className='icon-button'>{props.rightIcon}</span>    
        </a>
    
  );
}

export default DropDownItem;
