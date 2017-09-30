import React, { Component } from 'react';

import MainBlock from './mainBlock.jsx'
import MoreBlock from './moreBlock.jsx'

class MoreMenu extends Component {
  constructor(props) {
    super(props);
    
    this.onClickHandler = this.onClickHandler.bind(this);
    this.setHiddenItems = this.setHiddenItems.bind(this);

    this.state = {
      hiddenElemens: [],
      selectedItem: 'all'
    }
  }

  setHiddenItems(newHiddenElements) {
    this.setState({
      hiddenElemens: newHiddenElements
    });
  }

  onClickHandler(e) {
    this.setState({
      selectedItem: e.target.getAttribute('data-label').toLowerCase()
    });
  }

  render() {
    return (
      <div className="m-menu js-more-menu">
        <MainBlock items={this.props.items} selectedItem={this.state.selectedItem} onClickHandler={this.onClickHandler} setHiddenItems={this.setHiddenItems} />
        <MoreBlock items={this.state.hiddenElemens} selectedItem={this.state.selectedItem} onClickHandler={this.onClickHandler} />
      </div>
    )
  }
};

export default MoreMenu;