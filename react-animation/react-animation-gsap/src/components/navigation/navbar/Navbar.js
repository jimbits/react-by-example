import React from 'react'
import styled from 'styled-components'

const Bar = styled.nav `
 background-color:red;
 padding: 0.5rem 1rem;
 color:#ffffff;
`
const IconView = styled.ul `
   display:flex;
   justify-content:space-between;
`
const ListView = styled.ul `
   display:none
`
export default function Navbar() {
    return (
      <Bar>
        <IconView>
          <li>logo</li>
          <li>React Animation</li>
          <li>menu</li>
        </IconView>
        <ListView>
          <li>Route Something</li>
          <li>Route Something</li>
          <li>Route Something</li>
          <li>Route Something</li>
        </ListView>
      </Bar>
    );
}
