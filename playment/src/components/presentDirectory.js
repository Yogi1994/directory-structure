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

  renderDirList() {
    return this.props.dirList.map(function(name,index) {
      return (
        <div key={index} className="col-md-3 gridContainer">
          <Folder name={name}/>
        </div>
      );
    }, this);
  }

  render() {
    return (
      <div className="container">
          <div className="row">
            {this.renderDirList()}
          </div>
        </div>
    );
  }
}

export default PresentDirectory;
