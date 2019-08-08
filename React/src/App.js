 import './App.css';
 import React, {Component, useState} from 'react';
 import ReactDOM from 'react-dom';
// Components
import Card from './Card/Card.js';
import Navbar from './Navbar/Navbar.js'
import Welcome from './Welcome/Welcome.js'
import AddCard from './AddCard/AddCard.js'

 //Files
import myJson from './Files/data.json';
import 'antd/dist/antd.css';
import {  Pagination, Button } from 'antd';

//List of people in the JSON file
let jsonLength =Object.keys(myJson ).length 
// Starting default index 
let index = 2;

 
class App extends Component {
  index =1
  state = {
    person: myJson[index ],
    tab:"home",
   
  }

  switchPersonHandler=(pageNumber)=>{
   
   //subtract one because index counts zero and pagination starts from one
    index = pageNumber-1
   
    //change current person from State
    this.setState({
      person: myJson[index]
    })    
  }
 

  switchTabHandler =(newTab)=>{
    
 this.setState({tab: newTab})
 }

render(){
  return (
    <React.Fragment>
      <Navbar tabClick={this.switchTabHandler  } ></Navbar>

    {/* If Press Home */}
      {this.state.tab === "home"?  
        <Welcome></Welcome>
       :null}

    {/* If pressed Slider tab */}
       {this.state.tab === "slider" ?
         <div>

<Card    person={this.state.person}  ></Card>
<Pagination showQuickJumper defaultPageSize={1} 
defaultCurrent={2} total={ jsonLength} onChange={this.switchPersonHandler }/>
      </div> :null }
     
     
     {/* If pressed AddCard tab */}
    
     {this.state.tab === "addCard"?  
    <AddCard person={this.state.person} ></AddCard>
    :null}
    


      </React.Fragment>
    
    );
}
}
export default App;
