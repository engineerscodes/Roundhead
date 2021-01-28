 import {DisplayList,DisplayH1,Teamgrid} from './TeamMainStyled'
  import Teams from './Teams'

import Navbar from '../NavBar/NavBar'
import  ButtonRouterLink from '../ReactRouterBtn/ButtonRouterLink'

import React ,{Component} from 'react';


class TeamMain extends Component 
{    
    

     render(){
     return (
         <>  
         
        
         <DisplayList id='team'>
           
           <DisplayH1> CORE TEAM 2020-2021 </DisplayH1>
           </DisplayList>
           <DisplayList >
           <Teamgrid>
           <Teams/>
           <Teams/>
           <Teams/>
           <Teams/>
           <Teams/>
           <Teams/>
           <Teams/>
           <Teams/>
           <Teams/>
           </Teamgrid>
           </DisplayList>
           
           <DisplayList>
           <ButtonRouterLink gotoPage={"/"} textdes={"Home"}/>
           </DisplayList>
           </> 
           
    
      
     )

     }
 }
 
 export default TeamMain;
 

