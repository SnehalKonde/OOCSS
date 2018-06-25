import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuView from './Components/MenuView.js';
import { connect } from 'react-redux';
import { getMenuItems , setMenuItems, getGitHubAccountInfo} from './actions/MenuItemAction.js';
import {bindActionCreators} from 'redux';

class App extends Component {
  constructor(props){
    super(props);
  }
  componentWillMount() {
    const options = [{name:'Home',state:'Selected'},{name:'About US',state:'Unselected'},
                    {name:'Clients',state:'Unselected'},{name:'Contact',state:'Unselected'}];
    this.props.getMenuItems(options);
  }
 componentWillReceiveProps(newProps) {
    debugger;
  }
  componentDidMount(){
    this.props.getGitHubAccountInfo();
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MenuView options={this.props.menuItems} handleChange={this.props.setMenuItems}/>
      </div>
    );
  }
}
function mapStateToProps(state,ownState) {
   return {
     menuItems : state.MenuItems
  }
}

function mapDispatchToProps(dispatch){
  return{
    getMenuItems : bindActionCreators(getMenuItems,dispatch),
    setMenuItems : bindActionCreators(setMenuItems,dispatch), 
    getGitHubAccountInfo: bindActionCreators(getGitHubAccountInfo,dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default (App);
