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
 // Starting default index 
 
 
 
 
  

  let index = 0
class App extends Component {

  state = {
    members : myJson,
     
    jsonLength: Object.keys(myJson ).length, 
    person: myJson[index ],
    tab:"home",
   pageNumber : 1
  }
  index = this.state.pageNumber;
  downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(this.state.members)], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }
  
// Change card
  switchPersonHandler=(pageNumber)=>{
   
   //subtract one because index counts zero and pagination starts from one
    index = pageNumber-1
   
    //change current person from State
    this.setState({
      person: this.state.members[index],
      pageNumber: index+1
    })    
  }

  // Tabs
  switchTabHandler =(newTab)=>{
    
 this.setState({tab: newTab})
 }


   showJson = () => {

  console.log( this.state.members);
 }


 addNewItem = (newItem) => {
  console.log(" Before " ,  this.state.members)


  this.setState(prevState => {
    return {
      members: [...prevState.members,newItem],
      jsonLength:this.state.jsonLength+1, 

    }
  }, ()=> {
    console.log(" after " ,  this.state.members)
  } 
  
  )
 }
 newList = (newMembers)=> {
  
  this.setState({

    members : newMembers

  })
  // console.log( );

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
defaultCurrent={this.state.pageNumber} total={ this.state.jsonLength} onChange={this.switchPersonHandler }/>
      </div> :null }
     
     
     {/* If pressed AddCard tab */}
    
     {this.state.tab === "addCard"?  
    <AddCard  addNewItem={this.addNewItem}></AddCard>
    :null}
{/* If pressed Slider tab */}
       {this.state.tab === "slider" ?
         <div  className="download" >

     <Button onClick={this.downloadTxtFile}> Download new JSON file </Button>

</div> :null}

      </React.Fragment>
    
    );
}
}
export default App;
