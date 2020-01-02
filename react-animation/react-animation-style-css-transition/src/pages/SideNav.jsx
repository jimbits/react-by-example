import React, { Component } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group'
const Wrapper = styled.aside`
position:absolute;
z-index:3;
.menu{
    background:black;
    position:relative;
    top:33px;
    width:500px;
    height:45vh;
    transform: translate3d(-500px,0,0);
}
.slide-enter{
    transform: translate3d(0,0,0)
}
.slide-enter-active{
    transform: translate3d(-500px,0,0);
    transition: transform 300ms ease;
}
.slide-enter-done{
    transform: translate3d(-500px,0,0);
}

.slide-exit{
    transform: translate3d(-500px,0,0)
}
.slide-exit-active{
    transform: translate3d(0,0,0);
    transition: transform 300ms ease;
}
.slide-exit-done{
    transform: translate3d(0,0,0);
}
`
const Tab = styled.div`
    width:50px;
    height:50px;
    background:tomato;
    position:absolute;
    right:-50px;
`
const Menu = (props) => {

    return (
        <Wrapper >
            <CSSTransition in={props.isOpen} timeout={2000} classNames="slide">
                <div className="menu">
                    <Tab onClick={() => (props.onClick())} />
                </div>
            </CSSTransition>

        </Wrapper>
    );
}


class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        };
    }
    handleClick = () => {

        this.setState({
            isOpen: !this.state.isOpen
        })

    }

    render() {
        return (

            <Menu onClick={this.handleClick} isOpen={this.state.isOpen} />

        );
    }
}

export default SideNav;

