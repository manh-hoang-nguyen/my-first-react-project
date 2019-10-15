import React, {useState} from 'react';
 
import './App.module.css';
 

import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

const App=()=> {
 const [personState, setPersonState]= useState({
    persons:[
      {id:1,name:'Manh Hoang' ,age:26},
      {id:2,name:'Thanh Xuan', age:25},
      {id:3,name:'Cong Hoang', age:12}
    ],
    otherState:'some other vale' 
  });
  const [ state,set]= useState({
   
    showPersons:false
  });
 
 const  style={
    backgroundColor:'green',
    font:'inherit',
    border:'1px solid red',
    padding:'8px',
    cursor:'pointer'
   
    
  };
  

  const nameChangedHandler=(event,id)=>{
    const personIndex = personState.persons.findIndex(p=>{
      return p.id===id;
    });
    

    const person ={
       ...personState.persons[personIndex]
      };
    person.name=event.target.value;

    const persons =[...personState.persons];
    persons[personIndex]=person;
    setPersonState({persons:persons})
}

const deletePersonHandler=(personIndex)=>{
  //const persons= personState.persons.slice();
  const persons=[...personState.persons];
  persons.splice(personIndex,1);
   setPersonState({
    persons:persons
  })
}

 const togglePersonHandler = ()=>{
    const doesShow = state.showPersons;  
   
    set({ showPersons: !doesShow });
    
 }

 let persons= null;

if(state.showPersons)
{
  persons=(
    <div> 
      <Persons 
      persons={personState.persons}
      changed={ nameChangedHandler }
      clicked={ deletePersonHandler }
       /> 
     
      
    </div> );

  style.backgroundColor='red';

}


    return (
      <div  className="App">
        <Cockpit
        persons={personState.persons}
        style={style}
        onClick={togglePersonHandler}
        />
      {persons} 
      </div>
      
    );
   
 
}

export default App;
