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
    const id = item.id;
    // get inventory from state, minus element with matching id, then add updated - thus replacing original
    const updatedInventory = this.state.inventory.filter(element => element.id !== id).concat(item);
    this.setState({inventory: updatedInventory})
  }

  
  render() {
    
    // conditional rendering
    let detail = null;
    let inventoryList = <List  
                          items={this.state.inventory}
                          onItemClick={this.handleDisplayDetail}
                          onQuickSellClick={this.handleQuickSale}/>
    
    if (this.state.selectedItem !== null) {
      detail = <Detail item={this.state.selectedItem}/>
    }
    
    return(
      <React.Fragment>
        <div className="add-form">
          <Add onAddClick={this.handleAddItem}/>
        </div>
        <div className="detail">
          {detail}
        </div>
        <div className="inventory-list">
          {inventoryList}
        </div>
      </React.Fragment>
    );
  }
}
export default InventoryControl;