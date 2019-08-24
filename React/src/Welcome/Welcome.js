import React, {Component} from 'react';
import './Welcome.css';
import {  Container} from 'react-bootstrap'
 
class Welcome extends Component {
  
  render(){   return (  

<Container id="welcome">
     <h1>Welcome to the Card Member Slider</h1>
<p>For this Components, you will be able to navagigate through different aparts of the app, 
    <br></br>hidding component and showing new one depending on the tab clicked.</p>
<br></br>
<ul>
<li>Card Slider</li>
<li>Add Card</li>

</ul>
</Container>

       );
  }}
  
  export default Welcome;