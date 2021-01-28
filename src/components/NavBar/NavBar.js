//import react from 'react'
//import { Link } from 'react-router-dom'
//import * as RB from 'react-bootstrap'
import {Nav,NavBarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks } from './NavBarStyle'

import {FaBars} from 'react-icons/fa'



const Navbar =(props)=>{ return ( 
<>
  <Nav>
    <NavBarContainer>
        <NavLogo to='/'>
        
          ANDROID CLUB
           
        </NavLogo>

        <MobileIcon onClick={props.toggle}>
          <FaBars/>
        </MobileIcon>
        <NavMenu>
          <NavItem><NavLinks  to='about'>HOME</NavLinks> </NavItem>
          <NavItem><NavLinks to='event' >EVENT'S</NavLinks></NavItem>
          <NavItem><NavLinks to='team'>TEAM</NavLinks></NavItem>
          <NavItem><NavLinks to='announcement'>ANNOUNCEMENT</NavLinks></NavItem>
          <NavItem><NavLinks to='contact'>CONTACT</NavLinks></NavItem>
        </NavMenu>
    </NavBarContainer>
  </Nav>
</>
  );
}

export default Navbar;


