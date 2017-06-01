import React, { Component } from 'react';
import '../styles/folder.css';
import * as AppActions from '../actions/app-action';
import {connect} from 'react-redux';

class Folder extends Component {

  constructor(props){
    super(props);
  }


  /**
   * 
   */
  _onClickChangeDir() {
    this.props.fetchDirList(this.props.filePath + '/' + this.props.name);
  }

  renderLabel() {
      return (
        <p>{this.props.name}</p>
      );
  }

  render() {
    return (
      <div onClick={this._onClickChangeDir.bind(this)} >
        {/*<img onClick={this._onClickChangeBorder.bind(this)} onKeyPress={this.handleKeyPress} src={this.props.src} width="100" height="100" alt="img" />*/}
        {this.renderLabel()}
      </div>
    );
  }
}

function mapStateToProps(state : Object) {
  return {
    filePath: state.appReducer.filePath
  };
}

function mapDispatchToProps(dispatch : Function) {
  return {
    fetchDirList: (filePath) => {
      dispatch(AppActions.fetchDirList(filePath));
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Folder);
