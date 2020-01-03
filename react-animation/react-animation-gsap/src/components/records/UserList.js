import React from 'react'
import {Users, User, FullName, Email, Bio} from './styles'
import {PlaceholderFemale, PlaceholderMale} from 'icons'




function UserImage(props){
   
     if(props.imageSrc){
       return <PlaceholderFemale/>
     }else{
       return <PlaceholderMale/>
     }
 
}

function NewRecord (props){
   return (
     <User>
       <FullName>
         {props.data.firstName} {props.data.lastName}
       <Email>{props.data.email}</Email>
       </FullName>
       <UserImage imageSrc={props.data.picture}/>
       <Bio>
         <h2>Bio</h2>
         {props.data.bio}
       </Bio>
       
     

     </User>
   );
}
export default function UserList(props) {
  console.log(props.data)
  
      if(props.data.length === 0){
            console.log( `${props.data}`);
          return null
      }else{
            
          return(  
          <Users>
              { props.data.map((item,index)=><NewRecord key={index} data={item}/>)}
          </Users>
          )
      }
}
