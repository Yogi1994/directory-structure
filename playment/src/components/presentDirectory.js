/**
 * @fileoverview This is the grid.
 */

import React, { Component } from 'react';
import Folder from './folder';
import '../styles/presentDirectory.css';

class PresentDirectory extends Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  emptyFolder() {
    return (
      <div>
        Nothing to show here
      </div>
    );
  }

  renderDirList() {
    if(this.props.dirList.length === 0){
      return this.emptyFolder();
    }
    return this.props.dirList.map(function(name,index) {
      return (
        <div key={index} className="col-md-12 gridContainer">
          <Folder name={name}/>
        </div>
      );
    }, this);
  }

  render() {
    return (
      <div >
          <div className="row">
            {this.renderDirList()}
          </div>
        </div>
    );
  }
}

export default PresentDirectory;
