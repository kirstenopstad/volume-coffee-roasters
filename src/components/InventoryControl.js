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
    let addForm = null;
    let addButtonText = null;
    let inventoryList = <List  
    items={this.state.inventory}
    onItemClick={this.handleDisplayDetail}
    onQuickSellClick={this.handleQuickSale}/>
    
    
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