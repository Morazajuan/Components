import React, {Component, useState} from 'react';
import './Card.css';
import  myJson from '../Files/data.json';

import { Carousel,Pagination } from 'antd';






class Card extends Component {

	
 render(){
    return (  
		<div>
<div id="slideshowContainer">
	<div id="slideshow">
 
	 
 
 	<div id="card" > 
			
			{/* <!-- 1/3 of card --> */}
			{/* <img id="cardLogo" src="../../assets/logo.png"> */}

			{/* <!-- 2/3 of card--> */}
			<div id="secondThird" className="oneThird">
				<div className="innerHalfSection">
					<p>
						Name 
						<b> {this.props.name}</b>
					</p>
					<p>
						ID #<b>1234</b>
					</p>
				</div>
				<div className="innerHalfSection">
					<p>Dependents</p>
					{/* <!-- Reason for another div is to make coloums appear when list is longer than 3 --> */}
					<div className="dependentList">
						<div className="dependent">
							<b>1234</b>
						</div>
					</div>
				</div>
			</div>
		</div>

		 
 
		 
   
  
 	</div>
</div>
 
</div>
       );
}}

export default Card;