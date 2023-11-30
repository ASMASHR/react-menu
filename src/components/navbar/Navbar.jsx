
import Navitem from './NavItem';
import './navbar.css';
import {ReactComponent as MessengerIcon} from '../../icons/messenger.svg'
import {ReactComponent as BellIcon} from '../../icons/bell.svg'
import {ReactComponent as PlusIcon} from '../../icons/plus.svg'
import DropDownMenu from './DropDownMenu';

function RightNavbar() {
  return (
    <nav className="navbar">
        <ul className="navbar-nav">
            <Navitem icon={<PlusIcon/>}/>
            <Navitem icon={<BellIcon/>}/>
            <Navitem icon= {<MessengerIcon />}>
                  <DropDownMenu></DropDownMenu>
              </Navitem>
        </ul>
    </nav>
  );
}

export default RightNavbar;
