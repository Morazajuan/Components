import React, { Component, useState } from "react";
import ReactDOM from "react-dom";


//Redux
import { connect } from "react-redux";
import * as actions from "../Redux/Actions";
import { bindActionCreators } from "redux";
import { Container,Row, Col } from "react-bootstrap";
import logo from '../Assets/logo.png'
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




class App extends Component {


  render() {
 
    return (
      <Container>        <h2> Last Card Added</h2>

        <Container id="card">
          {/* <!-- 1/3 of card --> */}
          <img id="cardLogo" src={logo}></img>
          <Row>
            <Col sm={6}>
          
            </Col>
 
          </Row>
          {/* <!-- 2/3 of card--> */}

          {/* <!-- 3/3 of card --> */}

          {/* <Row>
            <Col>
              <p>
                Group No. <b>{this.props.cards.groupNo}</b>
              </p>
              <p>
                BIN <b>{this.props.cards.bin}</b>
              </p>
              <p>
                Benefit Plan <b>{this.props.cards.benPla}</b>{" "}
              </p>
              <p>
                Effective Date <b>{this.props.cards.effDate}</b>
              </p>
            </Col>
            <Col>
              {" "}
              <p>
                Plan <b>{this.props.cards.plan}</b>
              </p>
              <p>
                Office Visit <b>${this.props.cards.ov}</b>
              </p>
              <p>
                Specialist Copay <b>${this.props.cards.sc}</b>{" "}
              </p>
              <p>
                Emergency <b>${this.props.cards.emergency}</b>
              </p>
              <p>
                Deductible <b>${this.props.cards.dedu}</b>
              </p>
            </Col>
          </Row> */}
        </Container>
      </Container>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchTorProps
)(App);
