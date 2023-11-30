import DropDownItem from './DropDownItem';
import './navbar.css';
import {ReactComponent as CogIcon} from '../../icons/cog.svg'
import {ReactComponent as ChevronIcon} from '../../icons/chevron-right.svg'

import {ReactComponent as BoltIcon} from '../../icons/bolt.svg'
import {ReactComponent as ArrowIcon} from '../../icons/arrow.svg'

import {React,useState} from 'react';
import { CSSTransition } from 'react-transition-group';
function DropDownMenu() {
    const [activeMenu,setActiveMenu]=useState('main')
    const [menuHeight,setMenuHeight]=useState(null)
    function calculHeight(el){
        const height=el.offsetHeight
        setMenuHeight(height)
    }
    
  return (
        <div className="dropdown" style={{height:menuHeight}}>
            <CSSTransition in={activeMenu=='main'} unmountOnExit timeout={500} classNames='menu-primary' onEnter={calculHeight}>
                <div className='menu'>
                <DropDownItem>My Profile</DropDownItem>
          <DropDownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />} goToMenu="settings"activeMenu={activeMenu} setActiveMenu={setActiveMenu} >
            Settings
          </DropDownItem>
         
          </div>
            </CSSTransition>


            <CSSTransition in={activeMenu=='settings'} 
            unmountOnExit 
            timeout={500} 
            classNames='menu-secondary' 
            onEnter={calculHeight}
            >
                <div className='menu'>
                <DropDownItem activeMenu={activeMenu} setActiveMenu={setActiveMenu} goToMenu="main" leftIcon={<ArrowIcon />}>
                <h2>My Tutorial</h2>
                </DropDownItem>
                <DropDownItem leftIcon={<BoltIcon />}>HTML</DropDownItem>
                <DropDownItem leftIcon={<BoltIcon />}>CSS</DropDownItem>
                <DropDownItem leftIcon={<BoltIcon />}>JavaScript</DropDownItem>
                <DropDownItem leftIcon={<BoltIcon />}>Awesome!</DropDownItem>
                </div>
            </CSSTransition>
        </div>
    
  );
}

export default DropDownMenu;
