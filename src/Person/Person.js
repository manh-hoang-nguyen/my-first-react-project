import React from 'react';

const Person =(props)=>{
    return( 
    <div>
         <p onClick={props.click}>My name is {props.name}. I'm {props.age} years old</p>
         <p></p>
    </div>
   
    )
}

export default Person;