import React, {Component, useState} from 'react';
import './AddCard.css';
 import logo from '../Assets/logo.png'

import { Input,Select  } from 'antd';
import { Button   } from 'antd/lib/radio';


// This Code is to input names of dependants
const { Option } = Select;


let dependents = [];


function handleChange(value) {
 
 newMember.dependents = value
 }

 
// Default Values
let newMember = {
    "name": "",
    "id": 0,
    "dependents":[ ],
    "groupNo": 0,
    "bin": 0,
    "benPla": "HIOPT",
    "effDate": "01/01/1000",
    "plan": "PPO",
    "ov": 0,
    "sc": 0,
    "emergency":0,
    "dedu": 0
            

  }
  function handleChangeSelect (evt) {
    console.log(`selected ${evt}`);
  
    newMember.benPla = evt
   }
//  let name= "Juan"
//  let id=1234
//  let dependents=["Kid1","Kid2","Kid3"]
//  let groupNo= 1432
//  let bin=242
//  let benPla="HIOPT"
//  let effDate= "01/10/2343"
//  let plan= "PPO"
//  let ov= 23
//  let sc= 15
//  let emergency=75
//  let dedu=76
         

class AddCard extends Component {


      addCard = ()=> {
  

        newMember.name = this.state.name
        newMember.id = this.state.id
         newMember.groupNo = this.state.groupNo
        newMember.bin = this.state.bin
         newMember.effDate = this.state.effDate
        newMember.plan = this.state.plan
        newMember.ov = this.state.ov
        newMember.sc = this.state.sc
        newMember.emergency = this.state.emergency
        newMember.dedu = this.state.dedu

    this.props.addNewItem(newMember);
  
 
      }
      //without this, input text will not be modify
      constructor(){
        super()
         this.state={
          name: "",
          id:0,
          dependents:[],
          groupNo: 0,
          bin:0,
          benPla:"",
          effDate: "",
          plan: "",
          ov: 0,
          sc: 0,
          emergency:0,
          dedu:0,
        };
        this.handleChange = this.handleChange.bind(this);
      }
      
      handleChange (evt) {
        // check it out: we get the evt.target.name (which will be either "email" or "password")
        // and use it to target the key on our `state` object with the same name, using bracket syntax
        this.setState({ [evt.target.name]: evt.target.value });

        console.log(evt.target.name+" "+evt.target.value)
      }
     
     
 render(){
    return (  
        <div>
<div id="card" className="example-Input" > 
		
			{/* <!-- 1/3 of card --> */}
			<img id="cardLogo" src={logo}></img>

			{/* <!-- 2/3 of card--> */}
			<div id="secondThird" className="oneThird ">
				<div className="innerHalfSection" >
					<p>
						Name 
						<b> <Input type="text" name="name" placeholder="No name"  onChange={this.handleChange}/></b>
					</p>
					<p>
						ID # <b><Input type="text" name="id" placeholder="0000" onChange={this.handleChange} /></b>
					</p>
				</div>
				<div className="innerHalfSection">
					<p>Dependents</p>
					{/* <!-- Reason for another div is to make coloums appear when list is longer than 3 --> */}
					<div className="dependentList">
						<div className="dependent">
         
                        <Select mode="tags" style={{ width: '15em' }} placeholder="Dependents" onChange={handleChange}>
                        {dependents}
                            </Select>
                      

         		</div>
					</div>
				</div>
			</div>
						{/* <!-- 3/3 of card --> */}
			<div id="thirdThird" className="oneThird">
                <div className="innerHalfSection">
                  <p>Group No. <b><Input type="text" placeholder="0000"  name="groupNo"  onChange={this.handleChange}/></b></p>
                  <p>BIN <b><Input type="text" name="bin" placeholder="0000" onChange={this.handleChange} /></b></p>
                  <p>Benefit Plan 
                      <Select defaultValue="Standard"  name="benPla" onChange={handleChangeSelect}  style={{width:'100%'}}  >
                        <Option value="Standard"  >Standard</Option>
                        <Option value="Basic"   >Basic</Option>
                      
                        <Option value="FEP"  >FEP</Option>
                      </Select>   </p>
                  <p>Effective Date <b> <Input type="text" placeholder="0000"  name="effDate" onChange={this.handleChange}/></b></p>
  
                </div>
                <div className="innerHalfSection">
                    <p>Plan <b><Input type="text" name="plan" placeholder="Basic" onChange={this.handleChange} /></b></p>
                    <p>Office Visit <b>$<Input placeholder="0"  type="text"  name="ov" onChange={this.handleChange} /></b></p>
                    <p>Specialist Copay <b>$<Input placeholder="0"  type="text" name="sc" onChange={this.handleChange} /></b> </p>
                    <p>Emergency  <b>$<Input placeholder="0" type="text" name="emergency" onChange={this.handleChange} /></b></p>
                    <p>Deductible  <b>$<Input placeholder="0"  type="text" name="dedu" onChange={this.handleChange} /></b></p>
                  </div>
              </div>

        </div>
                     <div id="addCard">
                     <Button onClick={this.addCard}  >Add Card</Button>
                         </div> 
</div>
                )}}


export default AddCard