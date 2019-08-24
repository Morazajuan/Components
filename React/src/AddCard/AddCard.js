import React, { Component } from "react";
import "./AddCard.css";
import logo from "../Assets/logo.png";

import { Input, Select,message } from "antd";
import { Button } from "antd/lib/radio";


// This Code is to input names of dependants
const { Option } = Select;

let dependents = [];
 


class AddCard extends Component {
  addCard = () => {
   this.props.newMember.name = this.state.name;
   this.props.newMember.id = this.state.id;
   this.props.newMember.groupNo = this.state.groupNo;
   this.props.newMember.bin = this.state.bin;
   this.props.newMember.dependents = this.state.dependents;
   this.props.newMember.benPla = this.state.benPla;
   this.props.newMember.effDate = this.state.effDate;
   this.props.newMember.plan = this.state.plan;
   this.props.newMember.ov = this.state.ov;
   this.props.newMember.sc = this.state.sc;
   this.props.newMember.emergency = this.state.emergency;
   this.props.newMember.dedu = this.state.dedu;

    this.props.addNewItem(this.props.newMember);
    message.success(this.props.newMember.name+"'s card has been added");

 
  };
  //without this, input text will not be modify
  constructor() {
    super();
    this.state = {
      name: "",
      id: 0,
      dependents: [""],
      groupNo: 0,
      bin: 0,
      benPla: "",
      effDate: "",
      plan: "",
      ov: 0,
      sc: 0,
      emergency: 0,
      dedu: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleListChange = this.handleListChange.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }

  handleChange(evt) {
    // check it out: we get the evt.target.name (which will be either "email" or "password")
    // and use it to target the key on our `state` object with the same name, using bracket syntax
    this.setState({ [evt.target.name]: evt.target.value });

   }
// Default Values
 
  handleChangeSelect(evt) {
 
  this.setState({ benPla:evt })
}
handleListChange(evt) {
 
  this.setState({ dependents:evt })
}


  render() {
    return (
      <div className="eee">
        <div id="card" className="example-Input">
          {/* <!-- 1/3 of card --> */}
          <img id="cardLogo" src={logo} alt="logo"></img>

          {/* <!-- 2/3 of card--> */}
          <div id="secondThird" className="oneThird ">
            <div className="innerHalfSection">
              <p>  Name
                <b>
                  {" "}
                  <Input
                    type="text"
                    name="name"
                    placeholder="No name"
                    onChange={this.handleChange}
                  />
                </b>
              </p>
              <p>
                ID #{" "}
                <b>
                  <Input
                    type="text"
                    name="id"
                    placeholder="0000"
                    onChange={this.handleChange}
                  />
                </b>
              </p>
            </div>
            <div className="innerHalfSection">
              <p>Dependents</p>
              {/* <!-- Reason for another div is to make coloums appear when list is longer than 3 --> */}
              <div className="dependentList">
                <div className="dependent">
                  <Select
                    mode="tags"
                    style={{ width: "15em" }}
                    placeholder="Dependents"
                    onChange={this.handleListChange}
                  >
                    {dependents}
                  </Select>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- 3/3 of card --> */}
          <div id="thirdThird" className="oneThird">
            <div className="innerHalfSection">
              <p>
                Group No.{" "}
                <b>
                  <Input
                    type="text"
                    placeholder="0000"
                    name="groupNo"
                    onChange={this.handleChange}
                  />
                </b>
              </p>
              <p>
                BIN{" "}
                <b>
                  <Input
                    type="text"
                    name="bin"
                    placeholder="0000"
                    onChange={this.handleChange}
                  />
                </b>
              </p>
              <p>
                Benefit Plan</p>
                <div>


                <Select
                  defaultValue="Standard"
                  name="benPla"
                  onChange={this.handleChangeSelect}
                  style={{ width: "100%" }}
                >
                  <Option value="Standard">Standard</Option>
                  <Option value="Basic">Basic</Option>

                  <Option value="FEP">FEP</Option>
                </Select>{" "}
                </div>
            <p></p>
              <p>
                Effective Date{" "}
                <b>
                  {" "}
                  <Input
                    type="text"
                    placeholder="0000"
                    name="effDate"
                    onChange={this.handleChange}
                  />
                </b>
              </p>
            </div>
            <div className="innerHalfSection">
              <p>
                Plan{" "}
                <b>
                  <Input
                    type="text"
                    name="plan"
                    placeholder="Basic"
                    onChange={this.handleChange}
                  />
                </b>
              </p>
              <p>
                Office Visit{" "}
                <b>
                  $
                  <Input
                    placeholder="0"
                    type="text"
                    name="ov"
                    onChange={this.handleChange}
                  />
                </b>
              </p>
              <p>
                Specialist Copay{" "}
                <b>
                  $
                  <Input
                    placeholder="0"
                    type="text"
                    name="sc"
                    onChange={this.handleChange}
                  />
                </b>{" "}
              </p>
              <p>
                Emergency{" "}
                <b>
                  $
                  <Input
                    placeholder="0"
                    type="text"
                    name="emergency"
                    onChange={this.handleChange}
                  />
                </b>
              </p>
              <p>
                Deductible{" "}
                <b>
                  $
                  <Input
                    placeholder="0"
                    type="text"
                    name="dedu"
                    onChange={this.handleChange}
                  />
                </b>
              </p>
            </div>
          </div>
        </div>
        <div id="addCard">
          <Button onClick={this.addCard}>Add Card</Button>
        </div>
        
      </div>
    );
  }
}

export default (AddCard);
