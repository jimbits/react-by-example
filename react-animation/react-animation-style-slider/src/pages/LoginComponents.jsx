import React from 'react';
import styled from 'styled-components'
import Logo from "../assets/svg/nait-grey-scale.svg";


const Branding = styled.div`
       margin-bottom:1rem;
         img{
             width:4.5rem; 
             margin-top: 1rem ;
        }
        h1{
            font-size:1.85rem;
        }
     p{
         font-size:1rem;
        color:#45495f;
     }
    
`

export const Brand = (props) => {
    return (
        <Branding>
            <h1>Digital Media & IT</h1>
            <p>industry directory</p>
            <img src={Logo} alt="northern alberta institute of technology" />
        </Branding>

    );
}


