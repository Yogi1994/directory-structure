import React, { Component } from 'react';
import '../styles/folder.css';
import folderimg from '../img/folder.png';
import * as AppActions from '../actions/app-action';
import {connect} from 'react-redux';

class Folder extends Component {

  /**
   * 
   */
  _onClickChangeDir() {
    var path = this.props.filePath;
    path.push(this.props.name);
    this.props.fetchDirList(path);
  }

  renderLabel() {
      return (
        <div className="folderLabel inRow">{this.props.name}</div>
      );
  }

  render() {
    return (
      <div className="imageOuterContainer" onClick={this._onClickChangeDir.bind(this)} >
        <img src={folderimg} className="mainFolderImage inRow" height="20px" width="20px"></img>
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
