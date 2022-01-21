import React from 'react';
import Child from './Child';

function Parent() {

    
const objectData={
    name:'hemanth',
    age:'20',
    disignation:'ASE'
}

  return <div>
        <h1 style={{color:'blue'}} >Paret Component </h1>
        <Child  data={objectData} />
         </div>;
}

export default Parent;
