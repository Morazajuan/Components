 import './App.css';
 import React, {Component, useState} from 'react';
 import ReactDOM from 'react-dom';
// Components
import Card from './Card/Card.js';
import Slider from './Carousel/Carousel.js';
 //Files
import myJson from './Files/data.json';
import 'antd/dist/antd.css';
import {  Pagination } from 'antd';


let jsonLength =Object.keys(myJson ).length 
let index = 2;

let member;

member = myJson[index];

// function onChange(pageNumber) {
// index = pageNumber; 

// member = myJson[index-1];
// console.log(index);
// console.log(member.name);
 
// }


class App extends Component {
  
  state = {
    person: [myJson[index]]
  }

  switchPersonHandler(){

    this.setState({
      person: myJson[index]
    })
    console.log(this.state.person.name)

  }
   onChange (pageNumber){
  index = pageNumber; 

  member = myJson[index-1];
  console.log(index);
  console.log(member.name);
  this.switchPersonHandler();
   
 }

render(){
  return (
    <React.Fragment>
     
    <Card    person={this.state.person}  ></Card>

    <Pagination showQuickJumper defaultPageSize={1} 
 defaultCurrent={2} total={ jsonLength} onChange={this.onChange}/>


      </React.Fragment>
    
    );
}
}
export default App;
