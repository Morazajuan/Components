import React, {Component} from 'react';
import './Card.css';
 import logo from '../Assets/logo.png'
 
 
 import {Col, Row, Container} from 'react-bootstrap'

 
   

class Card extends Component {

	
 render(){

     return (  
  
 	<Container id="card" > 
			
			{/* <!-- 1/3 of card --> */}
			<img id="cardLogo" src={logo} alt="logo"></img>
<Row>
<Col sm={6}>

<p>
						Name 
						<b> {this.props.person.name}</b>
					</p>
					<p>
						ID # <b>{this.props.person.id}</b>
					</p>
					</Col>

					<Col sm={6}>					<p>Dependents</p>
					{/* <!-- Reason for another div is to make coloums appear when list is longer than 3 --> */}
					<div className="dependentList">
						<div className="dependent">
							 {this.props.person.dependents.map(function(item) {

									return  <b key={item}>{item}<br></br></b>

							})}
						</div>
					</div>
					</Col>

</Row>
			{/* <!-- 2/3 of card--> */}
			 
						{/* <!-- 3/3 of card --> */}

<Row>
<Col>
<p>Group No. <b>{this.props.person.groupNo}</b></p>
                  <p>BIN <b>{this.props.person.bin}</b></p>
                  <p>Benefit Plan  <b>{this.props.person.benPla}</b> </p>
                  <p>Effective Date <b>{this.props.person.effDate}</b></p>
  
  </Col>
<Col> <p>Plan <b>{this.props.person.plan}</b></p>
                    <p>Office Visit <b>${this.props.person.ov}</b></p>
                    <p>Specialist Copay <b>${this.props.person.sc}</b> </p>
                    <p>Emergency  <b>${this.props.person.emergency}</b></p>
                    <p>Deductible  <b>${this.props.person.dedu}</b></p>
					</Col>
</Row>

		 
		</Container>
       );
}}

export default (Card) ;