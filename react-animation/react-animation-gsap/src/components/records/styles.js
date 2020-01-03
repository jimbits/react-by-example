import styled from 'styled-components';
const Users = styled.ul`
    border: 1px solid grey;
    max-width:420px;
    margin: 0 auto;
`; 

const User = styled.li`
  font-size: 18px;
  color: grey;
  padding: 0.75rem 1rem;
`
const FullName = styled.div`
  font-size:1rem;
 
`;
const FirstName = styled.div `
  background:blue;
  font-size: 26px;
  color:yellow;
`
const LastName = styled.div`
  background: blue;
  font-size: 26px;
  color: red;
`

const Email = styled.div`
  font-size: 0.8rem;
  color: rgba(0,0,0,0.25);
  font-weight:bold;
` 
const Bio = styled.div `
h2{
  font-size: 1rem;
  text-decoration:underline;
  padding-bottom: 0.25rem;
}
   font-size: 14px;
   padding: 1rem 0;
`


export {Users, User, FullName, FirstName, LastName, Email, Bio}