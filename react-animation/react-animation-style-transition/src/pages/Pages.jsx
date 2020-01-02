import React from 'react';
import styled from 'styled-components'
import { Transition } from 'react-transition-group'


const Page = styled.div`
    width:100%;
    height:100vh;
    background:#f73636;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    z-index:0;
    user-select:none;
    .contents{   
        position:relative;
        width:300px;
        text-align:center;
        padding:3.5rem 0;
        font-size:13px;
    }
    .brand, .login{
        position:absolute;
        width:100%;
        height:100%;
        top:0;
        left:0; 
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    .brand{
        background:#f54444;  
        z-index: 2;
    }
    .login{
        background:#f2424d;
        z-index: 3;
    }
    p{
        margin-bottom:0.5rem;
    }
    .entering{
      opacity:1;
      transition: opacity 150ms linear;
    }
    .exiting{
        opacity:0;
        transition: opacity 150ms linear;
   }
    .entered{
        opacity: 1;
        transition: opacity 150ms linear;
    }
   
    .exited {
        opacity: 0;
        transition: opacity 150ms linear;
      }
`

export const Brand = (props) => {
    return (
        <div className={`brand ${props.status}`} >
            <h1>Home Home On The Brand</h1>
            <p>So You Seeing This </p>
            <p>{props.status}</p>
        </div >
    );
}

export const Login = (props) => {
    return (
        <div className={`login ${props.status}`} >
            <h1>Time To Login</h1>
            <p>So You Seeing This </p>
            <p>{props.status}</p>
        </div >
    );
}

const Pages = (props) => {

    return (
        <Page onClick={() => props.onClick()} >
            <Transition in={props.trany} timeout={450}>
                {(status) => (
                    <Brand status={status} />
                )}
            </Transition>
            <Transition in={!props.trany} timeout={450}>
                {(status) => (
                    <Login status={status} />
                )}
            </Transition>

        </Page>
    );
}

export default Pages;





