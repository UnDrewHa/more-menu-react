import React, { Component } from 'react';

class MainMenuItem extends Component {
  constructor(props) {
    super(props);
    
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClickHandler(this.props.label);
  }

  handleDOMItem(item, label) {
    item && this.props.onHandleDOM(item, label);
  }

  componentDidMount() {
    this.domItem && this.props.onHandleDOM(this.domItem, this.props.label);
  }

  render() {
    return (
      <div 
      ref={(item) => this.domItem = item}
      className={`m-menu-item js-mm-item${this.props.isSelected}`} 
      onClick={this.onClick} 
      data-label={this.props.label}>{this.props.label}</div>
    )
  }
};

export default MainMenuItem;