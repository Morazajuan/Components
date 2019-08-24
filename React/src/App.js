import "./App.css";
import React, { Component } from "react";
// Components
import Card from "./Card/Card.js";
import Navbar from "./Navbar/Navbar.js";
import Welcome from "./Welcome/Welcome.js";
import AddCard from "./AddCard/AddCard.js";
 
//Ant Design
import "antd/dist/antd.css";
import { Pagination, Button } from "antd";

//Redux
import { connect } from "react-redux";
 import { bindActionCreators } from "redux";
import * as actions from "./Redux/Actions";

//Get data from Cards component
function mapStateToProps(state) {
  //this.props.cards
  return {
    cards: state
  };
}
function mapDispatchTorProps(dispatch) {
  return bindActionCreators( actions, dispatch);
}

let index = 0;
// Default Values
const newMember = {
  name: "",
  id: 0,
  dependents: [],
  groupNo: 0,
  bin: 0,
  benPla: "HIOPT",
  effDate: "01/01/1000",
  plan: "PPO",
  ov: 0,
  sc: 0,
  emergency: 0,
  dedu: 0
};

class App extends Component {


  state = {
    person: this.props.cards[index], //person to show in slider
     tab: "home",
    pageNumber: 1
  };

  // when delete card
  onDelete = () => {
    let cardsLen = this.props.cards.length;

    // 3 cases

    if (cardsLen === 1) {
      //last card in the deck. Set value to Default
    
           
      this.props.startRemovingCards(index, this.props.cards[index+1].name);
      return;

       
    } else {
      switch (true) {
        //if index in last card object then go backwards
        case index === cardsLen - 1: {
       

          this.switchPersonHandler(index )
          
          this.props.startRemovingCards(index, this.props.cards[index+1].name);
          return;
        }

        default:
       
            this.switchPersonHandler(index +1)
            this.props.startRemovingCards(index, this.props.cards[index+1].name);

           break;
      }
    }
  };

  // Change card
  //Con pagination & delete card this should change
  switchPersonHandler = pageNumber => {
    //subtract one because index counts zero and pagination starts from one
    index = pageNumber - 1;

    //change current person from State
    this.setState({
       pageNumber: index + 1
    });
  };


  index = this.state.pageNumber;

  downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(this.props.cards)], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  // Tabs
  switchTabHandler = newTab => {
    this.setState({ tab: newTab });
  };

  showCards = () => {
    console.log( this.state.person )

    console.log(this.props.cards);
  };

  addNewItem = newItem => {

    console.log("NEW CARD" )
    console.log(newItem)

    // this.props.addCard(newItem);
    this.props.startAddingCards(newItem)
    this.props.startLoadingCard()
  };

//Load card

componentDidMount(){

  this.props.startLoadingCard()
  
 }

  render() {

    
    return (
      <React.Fragment>
        <Navbar tabClick={this.switchTabHandler}></Navbar>

        {/* If Press Home */}
        {this.state.tab === "home" ? <Welcome></Welcome> : null}

        {/* If pressed Slider tab */}
        {this.state.tab === "slider" ? (
          <div>

            <Card person={this.props.cards[index]}></Card>

            <Pagination
              showQuickJumper
              defaultPageSize={1}
              current={this.state.pageNumber}
              defaultCurrent={this.state.pageNumber}
              total={this.props.cards.length}
              onChange={this.switchPersonHandler}
            />
          </div>
        ) : null}
{/* If pressed AdRecentCarddCard tab */}

{this.state.tab === "home" ? (
 <div> 
   
 
 {/* <RecentCard addNewItem={this.addNewItem} person={newMember}></RecentCard> */}

 </div>
        ) : null}


        
        {/* If pressed AddCard tab */}

        {this.state.tab === "addCard" ? (
          <AddCard addNewItem={this.addNewItem} newMember={newMember}></AddCard>
        ) : null}

        {/* If pressed Slider tab */}
        {this.state.tab === "slider" ? (
          <div className="download">
            {/* Download Button */}
            <Button onClick={this.showCards}>Show Cards</Button>
            {/* Delete index */}
            <Button onClick={this.onDelete}>Delete Member</Button>
          </div>
        ) : null}            

      </React.Fragment>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchTorProps
)(App);
