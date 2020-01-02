import React, { Component } from 'react';
import styled from 'styled-components'
import { TweenLite, Power4, CSSPlugin } from "gsap/all";

const C = CSSPlugin;

const Slider = styled.div`
position:relative;
width:240px;
height:160px;
overflow:hidden;
margin: 0 auto;
 
 
    .slide{
        position:absolute;
        width: 240px;
        height: 160px;
    }

    button{
        background:none;
        border:none;
        color:#778899;
    }


   
    .login-buttton{
        font-size:1.175rem; 
        border:1px solid  #333342;
        border-radius: 5px;
        width:200px;
        padding: 0.5rem 1rem; 
        color:#45495f;
        margin:0.5rem;
            
    }
    .message{
        font-size:1rem;
        color:#45495f;
    }
    .create-button{
        text-decoration:underline;
   
        margin:0;         
    }

    .welcome{
        left:0;
    }
    .create{
 
        left:-240px;
    }
    .login{
        left:240px;
    }
`
const AccountSelect = (props) => {
    return (
        <div className="welcome slide">
            <button className="login-buttton" onClick={() => props.onClick("right")}>Log In</button >
            <button className="login-buttton" onClick={() => props.onClick("left")}>Create Account</button >

        </div>
    )
}

const AccountCreate = (props) => {
    return (
        <div className="create slide">
            <button className="login-buttton">Create Your Account</button >
            <p> <input type="text" /></p>
            <button onClick={() => props.onClick()}>Back</button >
        </div>
    )
}

const AccountLogin = (props) => {
    return (
        <div className="login slide">
            <button className="login-buttton">Login</button >
            <p> <input type="text" /></p>
            <p><button onClick={() => props.onClick()}>Back</button ></p>
        </div>
    )
}

class AccountSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.myElement = React.createRef();
        this.myTween = null;

    }


    handleClick = (slideDirection) => {
        switch (slideDirection) {
            case "right":
                this.myTween = TweenLite.to(this.myElement.current, 0.50, { x: -240, y: 0, ease: Power4.easeOut });
                break;
            case "left":
                this.myTween = TweenLite.to(this.myElement.current, 0.50, { x: 240, y: 0, ease: Power4.easeOut });
                break;
            default:
                this.myTween = TweenLite.to(this.myElement.current, 0.50, { x: 0, y: 0, ease: Power4.easeOut });
        }

    }
    render() {
        return (
            <Slider>
                <div className="slides" ref={this.myElement}>
                    <AccountSelect onClick={this.handleClick} />
                    <AccountLogin onClick={this.handleClick} />
                    <AccountCreate onClick={this.handleClick} />
                </div>
            </Slider>


        );
    }
}

export default AccountSlider;