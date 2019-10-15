import React from 'react';

const cockpit= (props)=>{
    
let classes=[ ] ;  
if(props.persons.length<=2) classes.push('red');
if(props.persons.length<=1) classes.push('bold');

    return(
        
        <div>
            <h1>Hi React {Math.floor(Math.random()*30)}</h1>
            <p className={classes.join(' ')}>This is really working</p>
            <button style={props.style}  onClick={props.onClick}>Toggle Person</button>
           
      </div>
      
    );
};

export default cockpit;