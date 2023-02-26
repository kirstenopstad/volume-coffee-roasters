import React from "react";
import inventorySeedData from "./InventorySeedData";
import List from  './List';
import Detail from './Detail';
import Add from './Add';
import Button from 'react-bootstrap/Button'

class InventoryControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      inventory: [...inventorySeedData],
      selectedItem: null,
      showAddForm: false,
    }
  }

  handleDisplayDetail = (id) => {
    const detailItem = this.state.inventory.filter(element => element.id === id)[0];
    this.setState({selectedItem: detailItem})
  }

  handleCloseDetail = () => {
    this.setState({selectedItem: null})
  }
  
  handleAddClick = () => {
    this.setState(prevState => ({showAddForm: !prevState.showAddForm,}));
  }

  // this.setState(prevState => ({
  //   // effectively sets bool formVisible to its opposite – a toggler!
  //   formVisibleOnPage: !prevState.formVisibleOnPage,
  // }));

  handleAddItem = (item) => {
    const updatedInventory = this.state.inventory.concat(item);
    this.setState({inventory: updatedInventory, showAddForm: false})
  }
  
  handleUpdateItem = (updatedItem) => {
    // structured like handleQuickSale
    const itemToReplace = this.state.inventory
                              .filter(i => i.id === updatedItem.id)[0]
    const insertionPoint = this.state.inventory.indexOf(itemToReplace)
    const updatedInventory = [...this.state.inventory]
    updatedInventory[insertionPoint] = updatedItem;
    this.setState({inventory: updatedInventory});
  }
  
  handleQuickSale = (updatedItem) => {
    // find index of updatedItem
    const itemToReplace = this.state.inventory.filter(e => e.id === updatedItem.id)[0];
    const insertionPoint = this.state.inventory.indexOf(itemToReplace);
    // make copy of inventory
    const updatedInventory = [...this.state.inventory]
    // replace item at index in inventory
    updatedInventory[insertionPoint] = updatedItem;
    // replace inventory in state
    this.setState({inventory: updatedInventory})
  }

  render() {

    // conditional rendering
    let detail = null;
    let addForm = null;
    let addButtonText = null;
    let inventoryList = <List  
    items={this.state.inventory}
    onItemClick={this.handleDisplayDetail}
    onQuickSellClick={this.handleUpdateItem}/>
    
    
    if (this.state.selectedItem !== null) {
      detail = <Detail item={this.state.selectedItem} onClose={this.handleCloseDetail}/>
      inventoryList = null;
    }
    
    if (this.state.showAddForm === true) {
      addForm = <Add onAddClick={this.handleAddItem}/>;
      inventoryList = null;
      detail = null;
      addButtonText = "Return to Inventory";
    } else {
      addButtonText = "Add Roast";
    }
    // multipurpose button
    let mpButton = <Button onClick={this.handleAddClick}>{addButtonText}</Button>;

    return(
      <React.Fragment>
        <div className="add-form">
          {mpButton}
          {addForm}
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