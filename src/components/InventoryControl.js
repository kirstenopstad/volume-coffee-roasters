import React from "react";
import inventorySeedData from "./InventorySeedData";
import List from  './List';
import Detail from './Detail';
import Add from './Add';

class InventoryControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      inventory: [...inventorySeedData],
      selectedItem: null,
      displayInventory: true,
      displayDetail: false,
      displayAdd: false,
    }
  }

  handleDisplayDetail = (id) => {
    const detailItem = this.state.inventory.filter(element => element.id === id)[0];
    this.setState({selectedItem: detailItem})
  }

  render() {
    let detail = null;
    if (this.state.selectedItem !== null) {
      detail = <Detail item={this.state.selectedItem}/>
    }
    return(
      <React.Fragment>
        <List inventory={this.state.inventory} onItemClick={this.handleDisplayDetail}/>
        {detail}
        <Add />
      </React.Fragment>
    );
  }
}
export default InventoryControl;