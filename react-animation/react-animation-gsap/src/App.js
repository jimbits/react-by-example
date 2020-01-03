import React, {useEffect, useState} from 'react';
import Navbar from 'components/navigation/navbar';
import UserList from 'components/records/UserList'
 
 

function App () {
 const [appData, setData] = useState([])
  useEffect(()=>{
     fetch("./data/data.json")
       .then(res => res.json())
       .then(data => {
         setData(data);
         
       });
  }, [ ])
 

  
    return (    
      <>
      <Navbar/>
      <UserList data={appData} />
      </> 
    );
 
}

export default App;
