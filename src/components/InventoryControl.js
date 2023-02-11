import React from "react";
import inventorySeedData from "./InventorySeedData";
import List from  './List';
import Detail from './Detail';
import Add from './Add';
// import Update from './Update';

class InventoryControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      inventory: [...inventorySeedData],
      selectedItem: null,
    }
  }

  handleDisplayDetail = (id) => {
    const detailItem = this.state.inventory.filter(element => element.id === id)[0];
    this.setState({selectedItem: detailItem})
  }
  
  handleAddItem = (item) => {
    const updatedInventory = this.state.inventory.concat(item);
    this.setState({inventory: updatedInventory})
  }
  
  handleUpdateItem = (item) => {
    const id = item.id;
    const updatedInventory = this.state.inventory
                                        .filter(element => element.id !== id)
                                        .concat(item);
    this.setState({inventory: updatedInventory})
  }
  
  handleQuickSale = (item) => {
    const updatedInventory = this.state.inventory.concat(item);
    this.setState({inventory: updatedInventory})
  }

  render() {
    let detail = null;
    let itemList = <List  
                      item={this.inventory}
                      onItemClick={this.handleDisplayDetail}
                      onQuickSellClick={this.handleQuickSale}/>
    
    if (this.state.selectedItem !== null) {
      detail = <Detail item={this.state.selectedItem}/>
    }
    
    return(
      <React.Fragment>
        <Add onAddClick={this.handleAddItem}/>
        {detail}
        {itemList}
      </React.Fragment>
    );
  }
}
export default InventoryControl;