import React, {useState} from 'react';
 
import './App.css';
import Person from './Person/Person'
const App=(props)=> {
 const [personState, setPersonState]= useState({
    persons:[
      {name:'Manh Hoang' ,age:26},
      {name:'Thanh Xuan', age:25},
      {name:'Cong Hoang', age:12}
    ] 
  });
  
  const switchNameHandler=()=>{
    setPersonState({
      persons:[
        {name:'Manh Hoangxx' ,age:'26'},
        {name:'Thanh Xuanxx', age:'25'},
        {name:'Cong Hoangxx', age:'12'}
      ]
    })
  }
    return (
      <div className="App">
        <h1>Hi React {Math.floor(Math.random()*30)}</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person 
        name={personState.persons[0].name} 
        age={personState.persons[0].age} 
        /> 
        <Person 
        name={personState.persons[1].name}
         age={personState.persons[1].age}
          /> 
        <Person 
        name={personState.persons[2].name}
         age={personState.persons[2].age} 
         /> 
      </div>
    );
   
 
}

export default App;
