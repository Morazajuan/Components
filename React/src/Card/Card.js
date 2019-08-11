import React, {Component, useState} from 'react';
import './Card.css';
 import logo from '../Assets/logo.png'
import { Carousel,Pagination } from 'antd';

class Card extends Component {

	
 render(){
    return (  
  
 	<div id="card" > 
			
			{/* <!-- 1/3 of card --> */}
			<img id="cardLogo" src={logo}></img>

			{/* <!-- 2/3 of card--> */}
			<div id="secondThird" className="oneThird">
				<div className="innerHalfSection">
					<p>
						Name 
						<b> {this.props.person.name}</b>
					</p>
					<p>
						ID # <b>{this.props.person.id}</b>
					</p>
				</div>
				<div className="innerHalfSection">
					<p>Dependents</p>
					{/* <!-- Reason for another div is to make coloums appear when list is longer than 3 --> */}
					<div className="dependentList">
						<div className="dependent">
							 {this.props.person.dependents.map(function(item) {

									return  <b key={item}>{item}<br></br></b>

							})}
						</div>
					</div>
				</div>
			</div>
						{/* <!-- 3/3 of card --> */}
			<div id="thirdThird" className="oneThird">
                <div className="innerHalfSection">
                  <p>Group No. <b>{this.props.person.groupNo}</b></p>
                  <p>BIN <b>{this.props.person.bin}</b></p>
                  <p>Benefit Plan  <b>{this.props.person.benPla}</b> </p>
                  <p>Effective Date <b>{this.props.person.effDate}</b></p>
  
                </div>
                <div className="innerHalfSection">
                    <p>Plan <b>{this.props.person.plan}</b></p>
                    <p>Office Visit <b>${this.props.person.ov}</b></p>
                    <p>Specialist Copay <b>${this.props.person.sc}</b> </p>
                    <p>Emergency  <b>${this.props.person.emergency}</b></p>
                    <p>Deductible  <b>${this.props.person.dedu}</b></p>
                  </div>
              </div>
		</div>
       );
}}

export default Card;