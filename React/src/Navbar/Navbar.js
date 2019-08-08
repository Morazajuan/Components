import { Menu, Icon } from 'antd';
import React, {Component,} from 'react';
import './Navbar.css';
const { SubMenu } = Menu;

class Navbar extends  Component {
  state = {
    current: 'home',
  };

  handleClick = e => {
    // console.log('click ', e.key);
    
    //return key value to {Parrent componetnt}
    this.setState({
      current: e.key,
    });

    this.props.tabClick( e.key)

  };

  render() {
    return (
      <Menu className="navbar" onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
       
       
       <Menu.Item key="home">
        <Icon type="home" />
                  Home
        </Menu.Item>

       
        <Menu.Item key="slider">
        <Icon type="idcard" />
                  Slider
        </Menu.Item>

        <Menu.Item key="addCard">
        <Icon type="addCard" />
                  Add Card
        </Menu.Item>

        <Menu.Item key="alipay">
          <a href="http://www.hcsc.com/" target="_blank" rel="noopener noreferrer">
            Go to Offical Website
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navbar