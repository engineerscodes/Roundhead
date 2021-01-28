import React from 'react'
import {SideBarContainer ,CloseIcon ,Icon,SideBarWrapper,SideBarMenu,SibeBarLink } from './sideBarStyle'


const SideBar = (props) => {
    return (
        <div>
            <SideBarContainer isOpen={props.isOpen} onClick={props.toggle}>
                < Icon onClick={props.toggle}>
                <CloseIcon/>
                </Icon>
                <SideBarWrapper>
                     <SideBarMenu>
                          <SibeBarLink to='home' onClick={props.toggle}>
                              HOME
                          </SibeBarLink>
                          <SibeBarLink to='event' onClick={props.toggle}>
                              EVENT'S
                          </SibeBarLink>
                          <SibeBarLink to='team' onClick={props.toggle}>
                              TEAM
                          </SibeBarLink>
                          <SibeBarLink to='announcement' onClick={props.toggle}>
                             ANNOUNCEMENT
                          </SibeBarLink>
                          <SibeBarLink to='contact' onClick={props.toggle}>
                             CONTACT
                          </SibeBarLink>
                     </SideBarMenu>
                </SideBarWrapper>
            </SideBarContainer>
        </div>
    );
};

export default SideBar;
