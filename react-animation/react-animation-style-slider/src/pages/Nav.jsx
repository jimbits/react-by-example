import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavBar = styled.nav`
   padding: 0.5rem 1rem;  
  a {margin: 0 1rem; color:tomato;}
  border-bottom: 1px dotted #e9e9e9;
  text-align:center;  
  position:absolute;
  z-index:4;
  background:white;
  left:0;
  right:0;
`
const Navigation = (props) => {
    return (
        <NavBar>
            <Link to="/">Home Page</Link>
            <Link to="/login">Login Page</Link>
        </NavBar>
    )
}

export default Navigation