import React, {Component, useState} from 'react';
import './AddCard.css';
 import logo from '../Assets/logo.png'
import { Input } from 'antd';
import { Button } from 'antd/lib/radio';



class AddCard extends Component {

	
 render(){
    return (  
        <div>
<div id="card" className="example-Input"> 
		
			{/* <!-- 1/3 of card --> */}
			<img id="cardLogo" src={logo}></img>

			{/* <!-- 2/3 of card--> */}
			<div id="secondThird" className="oneThird ">
				<div className="innerHalfSection" >
					<p>
						Name 
						<b> <Input type="text" name="name"/></b>
					</p>
					<p>
						ID # <b><Input type="text" name="id" /></b>
					</p>
				</div>
				<div className="innerHalfSection">
					<p>Dependents</p>
					{/* <!-- Reason for another div is to make coloums appear when list is longer than 3 --> */}
					<div className="dependentList">
						<div className="dependent">
                        <Input type="text" name="name" />
						</div>
					</div>
				</div>
			</div>
						{/* <!-- 3/3 of card --> */}
			<div id="thirdThird" className="oneThird">
                <div className="innerHalfSection">
                  <p>Group No. <b><Input type="text" name="name" /></b></p>
                  <p>BIN <b><Input type="text" name="name" /></b></p>
                  <p>Benegit Plam <b><Input type="text" name="name" /></b> </p>
                  <p>Effective Date <b> <Input type="text" name="name" /></b></p>
  
                </div>
                <div className="innerHalfSection">
                    <p>Plan <b><Input type="text" name="name" /></b></p>
                    <p>Office Visit <b>$<Input type="text" name="name" /></b></p>
                    <p>Specialist Copay <b>$<Input type="text" name="name" /></b> </p>
                    <p>Emergency  <b>$<Input type="text" name="name" /></b></p>
                    <p>Deductible  <b>$<Input type="text" name="name" /></b></p>
                  </div>
              </div>

        </div>
                     <div id="addCard">
                     <Button  >Add Card</Button>
                         </div> 
</div>
                )}}


export default AddCard