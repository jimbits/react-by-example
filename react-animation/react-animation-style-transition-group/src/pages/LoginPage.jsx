import React from 'react';
import styled from 'styled-components'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Logo from "../assets/svg/nait-grey-scale.svg"

const Page = styled.div`
    width:100%;
    height:100vh;
    background:#181825;
    color:white;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    user-select:none;
    color:#333342;
    font-size:0.75rem;
    text-align:center;

    button{
        background:none;
        border:none;
        color:#333342;
        padding:0;
    }

    .brand {
         img{
             width:8rem; 
             margin: 1rem 0;
        }
        h1{
            font-size:1.85rem;
        }
    }

    .login-button{
        background:none;
        border:none;
        color:#778899;
        font-size:0.825rem;
        margin-bottom:1rem;
    }

    .request-account-button{   
        text-decoration:underline;
        color:#778899;
        background:none;
        border:none;
    }

    .shit{
        position:relative;
        width:240px;
        height:80px;
        overflow:hidden;
    }
 
    .slides{
        display:inline-flex;
        position:relative;
        left:-240px;
    }

    .slide{
        width:15rem;
        height:3rem;
    }

  

    .fade-appear{
        opacity:0;
    }

    .fade-appear.fade-appear-active{
        opacity: 1;
        transition: opacity 300ms linear;
    }
    
    .fade-enter{
        opacity:0;
    }
    .fade-enter.fade-enter-active{
        opacity: 1;
        transition: opacity 300ms linear;
    }
   
    .fade-exit{
        opacity:1;
    }
    .fade-exit.fade-exit-active{
        opacity: 0;
        transition: opacity 300ms ease;
    }


    
    .login-exit .slides{
        left:-240px;
    }
    .login-exit-active .slides{
        left:0px;
        transition: left 300ms ease;
    }
    .login-exit-done .slides{
        left:0px;
    }

    .login-enter .slides{
        left:0;
    }
    .login-enter-active .slides{
        left:-240px;
        transition: left 300ms ease;
    }
    .login-enter-done .slides{
        left:-240px;
    }
   
`

export const Brand = (props) => {
    return (
        <div className={`brand`} >
            <h1>Digital Media & IT</h1>
            <p>industry directory</p>
            <img src={Logo} alt="northern alberta institute of technology" />
        </div >
    );
}




export const RequestAccount = (props) => {
    return (
        <div className="request-account slide">
            <button className="login-button" onClick={() => props.onClick('true')}>LOG IN</button >
            <p >Don't Have An Account?</p>
            <p>Then You Can Create One <button className="request-account-button" onClick={() => props.onClick()}>here</button ></p>
        </div>
    )
}

export const CreateAccount = (props) => {
    return (
        <div className="create-account slide">
            <h2>Create Account</h2>
            <p ><input type="text" /></p>
            <p><input type="text" /></p>
            <p><button>create account</button></p>
            <p><button className="request-account-button" onClick={() => props.onClick()}>here</button ></p>
        </div>
    )
}

export const AccountLogin = (props) => {
    return (
        <div className="account-login slide">
            <h2>Login</h2>
            <p ><input type="text" /></p>
            <p><input type="text" /></p>
            <p><button>submit</button></p>
            <p><button className="request-account-button" onClick={() => props.onClick()}>back</button ></p>
        </div>
    )
}

export const Slides = (props) => {
    return (
        <div className="shit">
            <div className="mask"></div>
            <div className="slides">
                <AccountLogin onClick={props.onClick} />
                <RequestAccount onClick={props.onClick} />
                <CreateAccount onClick={props.onClick} />
            </div>
        </div>
    )
}



const LoginPage = (props) => {

    return (
        <Page  >
            <Brand />

            <CSSTransition in={props.login} timeout={300} classNames="login">
                <Slides onClick={props.onClick} />
            </CSSTransition>


        </Page >
    );
}

export default LoginPage;



//  <TransitionGroup component={null} className="login-page-layout"> 
//     <CSSTransition
//                 key={props.switch}
// 
//                 timeout={3500}
//                 classNames="slide">
//                 {<props.switch?<Brand/>:<Login/>}
//             </CSSTransition>     
// </TransitionGroup>  





