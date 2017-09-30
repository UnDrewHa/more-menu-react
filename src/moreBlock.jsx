import React, { Component } from 'react';
import { includes } from 'lodash';

class MoreBlock extends Component {
  constructor(props) {
    super(props);
    
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(e) {
    this.props.onClickHandler(e);
  }

  render() {
    if (this.props.items.length < 0) return null;

    const hasSelectedItem = this.props.items.find(item => item.label.toLowerCase() === this.props.selectedItem.toLowerCase()) ? " _selected" : "";

    const items = this.props.items.map(sport => {
      let isSelected = sport.label.toLowerCase() === this.props.selectedItem.toLowerCase() ? " _selected" : "";

      return (
        <div 
          key={sport.id}
          className={`m-menu-item js-mm-more-item${isSelected}`}
          onClick={this.onClickHandler}
          data-label={sport.label}>{sport.label}</div>
      );
    });

    return(
      <div className={`m-menu-more js-mm-more${hasSelectedItem}`}>
        More
        <div className="m-menu-more-items js-mm-more-items">
          {items}
        </div>
      </div>
    );
  }
}

export default MoreBlock;
