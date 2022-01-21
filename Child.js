import React from 'react';


function Child({data}) {
    console.log(data);
  return (
   <div>
     <h1  style={{color:'red'}} >Child component</h1>
     <h3>Name:{data.name}</h3>
     <h3>Age:{data.age}</h3>
     <h3>Designation:{data.disignation}</h3>

   </div>
  )
}

export default Child;

