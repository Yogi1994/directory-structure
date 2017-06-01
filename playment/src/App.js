/**
 * @fileoverview this is the main app.
 */

import {connect} from 'react-redux';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PresentDirectory from './components/presentDirectory';
import * as AppActions from './actions/app-action';


class App extends Component {
  state : Object
  constructor(props){
    super(props);
    this.state = {
      dirToCreate: ""
    };
  }

  componentWillMount() {
    this.props.fetchDirList();
  }


  handleChangeInput(event) {
    this.setState({dirToCreate: event.target.value});
  }

  createDirectory(){
    if(this.state.dirToCreate !== ""){
      this.props.createDirectory(this.props.filePath + '/' +this.state.dirToCreate);
    }
  }

  onClickBack(){
    var path = this.props.filePath;
    path = path.substring(0,path.lastIndexOf("/") );
    this.props.fetchDirList(path);
  }

  render() {
    if(!this.props.dirList) {
      return (
        <p>Loading ... </p>
      );
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h1>hi</h1>
        
        <div>
          <button onClick={this.onClickBack.bind(this)}>Back</button>
          <input type="text" value={this.state.dirToCreate} onChange={this.handleChangeInput.bind(this)} />
          <button onClick={this.createDirectory.bind(this)}>Create</button>
        </div>
        <PresentDirectory dirList={this.props.dirList} />
      </div>
    );
  }
}

function mapStateToProps(state : Object) {
  return {
    dirList: state.appReducer.dirList,
    filePath: state.appReducer.filePath
  };
}

function mapDispatchToProps(dispatch : Function) {
  return {
    fetchDirList: (filePath:string) => {
      dispatch(AppActions.fetchDirList(filePath));
    },
    createDirectory: (dir:string) => {
      dispatch(AppActions.createDirectory(dir));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
