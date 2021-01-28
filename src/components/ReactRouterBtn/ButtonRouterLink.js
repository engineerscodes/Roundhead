import React from 'react';
import {ButtonLink}  from './ButtonRouterLinkStyle';



const ButtonRouterLink = (props) => {
    return (
        <>
          
           
            <ButtonLink to={props.gotoPage}  >
                   {props.textdes}
            </ButtonLink>
  
            
        </>
    )
}

export default ButtonRouterLink;
