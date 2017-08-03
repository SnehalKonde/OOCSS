import React, { Component } from 'react';
import MenuItem from './MenuItem.js';
import './MenuView.css' 

class MenuView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="menu">
        <h3 className="menu__title">Page Sections</h3>
        <MenuItem options={this.props.options} handleChange={this.props.handleChange}/>
      </div>
    );
  }
}

export default MenuView;
