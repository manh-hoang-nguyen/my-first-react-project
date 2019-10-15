import React from 'react';
 

import   './Person.css';
const Person =(props)=>{
    const style ={
        '@media (min-width:500px':{
            width:'450px'
        }
    }
    return( 
    <div className="Person" style={style}>
         <p onClick={props.click}>My name is {props.name}. I'm {props.age} years old</p>
         <p></p>
         <input type="text" onChange={props.changed} value={ props.name}></input>
    </div>
   
    )
}

export default  Person  ;