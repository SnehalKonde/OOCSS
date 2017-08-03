import React, { Component } from 'react';

class MenuItem extends Component {
  constructor(props) {
    super(props);  
    this.handleChange.bind(this);
    this.setState({selected:null});
  }
  handleChange(event){
    //this.props.handleChange(event);
     this.props.options.map((option) => 
    {  if(option.name == event.target.innerHTML){
          option.state = 'Selected';
        }else {
          option.state = 'Unselected';
        }
    })
    console.log(this.props.options);
    this.props.handleChange(this.props.options);
    this.setState({selected:event.target.innerHTML})
  }
  render() {
    const menuItems = this.props && this.props.options.map((option) =>
     <li className= {(option.state == 'Selected') ? "menu__item menu__item--selected" : "menu__item"} onClick={(event)=>{this.handleChange(event)}}>
        {option.name}
     </li>
    );
    return (
      <ul className="menu__items">
        {menuItems}
      </ul>
    );
  }
}

export default MenuItem;
