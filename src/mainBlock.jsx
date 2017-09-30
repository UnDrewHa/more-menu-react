import React, { Component } from 'react';
import { debounce } from 'lodash';

class MainBlock extends Component {
  constructor(props) {
    super(props);
    
    this.onClickHandler = this.onClickHandler.bind(this);
    this.baseTopOffset = null;
  }

  componentDidMount() {
    this.baseTopOffset = this.mainNav.firstElementChild.getBoundingClientRect().top;
    this.getHiddenItems(this.baseTopOffset, this.mainNav.children);

    window.addEventListener('resize', debounce(e => {
      this.getHiddenItems(this.baseTopOffset, this.mainNav.children);
    }, 150));
  }

  onClickHandler(e) {
    this.props.onClickHandler(e);
  }

  getHiddenItems(topOffset, items) {
    let firstHiddenItemIndex = null,
      newHiddenElements = [];

    Array.prototype.forEach.call(items, (item, index) => {
      if (item.getBoundingClientRect().top > (topOffset + 5) && !firstHiddenItemIndex)
      firstHiddenItemIndex = index;
    });

    if (firstHiddenItemIndex) {
      newHiddenElements = this.props.items.slice(firstHiddenItemIndex);
      this.props.setHiddenItems(newHiddenElements);
    }
  }

  render() {
    const mainItems = this.props.items.map(sport => {
      let isSelected = sport.label.toLowerCase() === this.props.selectedItem.toLowerCase() ? " _selected" : "";

      return (
        <div 
          key={sport.id}
          className={`m-menu-item js-mm-item${isSelected}`}
          onClick={this.onClickHandler}
          data-label={sport.label}>{sport.label}</div>
      );
    });

    return(
      <div ref={(item) => this.mainNav = item} className="m-menu-wrapper js-mm-items">
        {mainItems}
      </div>
    )
  }
}

export default MainBlock;