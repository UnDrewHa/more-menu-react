import React, { Component } from 'react';

import MainMenuItem from './item.jsx';
import MoreMenuItem from './moreItem.jsx';

class MoreMenu extends Component {
  constructor(props) {
    super(props);
    
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onHandleDOM = this.onHandleDOM.bind(this);

    this.firstItem = true;
    this.baseTopOffset = null;

    this.state = {
      hiddenElemens: [],
      selectedItem: 'all'
    }
  }

  onClickHandler(label) {
    this.setState({
      selectedItem: label.toLowerCase()
    });
  }

  onHandleDOM(item, label) {
    let { top } = item.getBoundingClientRect();

    if (this.firstItem) {
      this.baseTopOffset = top;
      this.firstItem = false;
    }

    if (top > (this.baseTopOffset + 10)) {
      this.setState(prevState => ({
        hiddenElemens: [...prevState.hiddenElemens, label]
      }))
    }
  }


  render() {
      const mainItems = this.props.items.map(sport => {

      let isSelected = sport.label.toLowerCase() === this.state.selectedItem.toLowerCase() ? " _selected" : "";

      return (
        <MainMenuItem 
          onHandleDOM={this.onHandleDOM}
          onClickHandler={this.onClickHandler}
          isSelected={isSelected} 
          label={sport.label}
          key={sport.id}
          />
      );
    });

      const moreItems = this.props.items.map(sport => {

      return (
        <MoreMenuItem 
          hiddenElemens={this.state.hiddenElemens}
          onClickHandler={this.onClickHandler}
          label={sport.label}
          key={sport.id}
          />
      );
    });

      const moreBlock = <div className="m-menu-more js-mm-more _visible">Еще<div className="m-menu-more-items js-mm-more-items">{moreItems}</div></div>;

    return (
      <div className="m-menu js-more-menu">
        <div className="m-menu-wrapper js-mm-items">
          {mainItems}
        </div>
        {this.state.hiddenElemens.length ? moreBlock : false}
        
      </div>
    )
  }
};

export default MoreMenu;