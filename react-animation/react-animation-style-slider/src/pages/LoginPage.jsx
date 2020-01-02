import React from 'react';
import styled from 'styled-components'
import { Brand } from "./LoginComponents";
import AccountSlider from "./AccountSlider"

const Layout = styled.div`
width:100%;
height:100vmax;
background:#181825;
color:white;
padding-top:3rem;
user-select:none;
color:#333342;
font-size:0.75rem;
text-align:center;

@media(min-width: 420px){
  padding-top:1rem;
}
`









const LoginPage = (props) => {

    return (
        <Layout>
            <div>
                <Brand />
                <AccountSlider />
            </div>

        </Layout>

    );
}

export default LoginPage;







