import React, { Component } from 'react';

class MoreMenuItem extends Component {
  constructor(props) {
    super(props);
    
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClickHandler(this.props.label);
  }
  render() {
    if (this.props.hiddenElemens.indexOf(this.props.label) < 0) {
      return null;
    }
    return (
      <div 
      className="m-menu-item js-mm-more-item _visible"
      onClick={this.onClick} 
      data-label={this.props.label}>{this.props.label}</div>
    )
  }
};

export default MoreMenuItem;