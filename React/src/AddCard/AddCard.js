import React, {Component, useState} from 'react';
import './AddCard.css';
import Card from '../Card/Card.js'
import logo from '../Assets/logo.png'



class AddCard extends Component {

	
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
						<b> <input type="text" name="name" /></b>
					</p>
					<p>
						ID # <b><input type="text" name="id" /></b>
					</p>
				</div>
				<div className="innerHalfSection">
					<p>Dependents</p>
					{/* <!-- Reason for another div is to make coloums appear when list is longer than 3 --> */}
					<div className="dependentList">
						<div className="dependent">
                        <input type="text" name="name" />
						</div>
					</div>
				</div>
			</div>
						{/* <!-- 3/3 of card --> */}
			<div id="thirdThird" className="oneThird">
                <div className="innerHalfSection">
                  <p>Group No. <b><input type="text" name="name" /></b></p>
                  <p>BIN <b><input type="text" name="name" /></b></p>
                  <p>Benegit Plam <b><input type="text" name="name" /></b> </p>
                  <p>Effective Date <b> <input type="text" name="name" /></b></p>
  
                </div>
                <div className="innerHalfSection">
                    <p>Plan <b><input type="text" name="name" /></b></p>
                    <p>Office Visit <b>$<input type="text" name="name" /></b></p>
                    <p>Specialist Copay <b>$<input type="text" name="name" /></b> </p>
                    <p>Emergency  <b>$<input type="text" name="name" /></b></p>
                    <p>Deductible  <b>$<input type="text" name="name" /></b></p>
                  </div>
              </div>
        </div>
                )}}


export default AddCard