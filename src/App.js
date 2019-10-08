import React, {useState} from 'react';
 
import './App.css';
import Person from './Person/Person'
const App=(props)=> {
 const [personState, setPersonState]= useState({
    persons:[
      {name:'Manh Hoang' ,age:26},
      {name:'Thanh Xuan', age:25},
      {name:'Cong Hoang', age:12}
    ],
    otherState:'some other vale'
  });
 const [otherState,setOtherState]= useState('some o=khter value')
 console.log(personState,otherState)
  const switchNameHandler=(newName)=>{
    setPersonState({
      persons:[
        {name:newName,age:'26'},
        {name:'Thanh Xuanxx', age:'25'},
        {name:'Cong Hoangxx', age:'12'}
      ] 
    })
  }
    return (
      <div className="App">
        <h1>Hi React {Math.floor(Math.random()*30)}</h1>
        <button onClick={switchNameHandler.bind(this,'Manh HoangOKK')}>Switch Name</button>
        <Person 
        name={personState.persons[0].name} 
        age={personState.persons[0].age} 
        click={switchNameHandler.bind(this,'manhhoangthanhxuan')}
        /> 
        <Person 
        name={personState.persons[1].name}
         age={personState.persons[1].age}
         click={switchNameHandler.bind(this,'manhhoangxxthanhxuan')}
          /> 
        <Person 
        name={personState.persons[2].name}
         age={personState.persons[2].age} 
         /> 
      </div>
    );
   
 
}

export default App;
