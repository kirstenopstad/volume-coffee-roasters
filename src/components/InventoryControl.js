import React from "react";
import inventorySeedData from "./InventorySeedData";
import List from  './List';
import FOHList from  './FOHList';
import Detail from './Detail';
import Add from './Add';
import Update from './Update';
import Button from 'react-bootstrap/Button'

class InventoryControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      inventory: [...inventorySeedData],
      selectedItem: null,
      showAddForm: false,
      showUpdateForm: false,
    }
  }

  // this.props.handleAddToCart(item)

  handleDisplayDetail = (id) => {
    const detailItem = this.state.inventory.filter(element => element.id === id)[0];
    this.setState({selectedItem: detailItem})
  }

  handleCloseDetail = () => {
    this.setState({selectedItem: null})
  }
  
  handleCloseUpdate = () => {
    this.setState({showUpdateForm: false})
  }
  
  handleAddClick = () => {
    this.setState(prevState => ({showAddForm: !prevState.showAddForm,}));
  }
  
  handleUpdateClick = () => {
    this.setState(prevState => ({showUpdateForm: !prevState.showUpdateForm,}));
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
    // show detail on update
    if (this.state.selectedItem != null) {
      this.setState({selectedItem: updatedItem})
    }
  }
  
  render() {
    // conditional rendering
    let detail = null;
    let addForm = null;
    // let updateForm = null;
    let addButtonText = null;
    let inventoryList = <FOHList  
    items={this.state.inventory}
    onItemClick={this.handleDisplayDetail}
    handleAddToCart={this.props.handleAddToCart}/>
    
    // 
    if (this.props.showBOH) {
      inventoryList = <List  
      items={this.state.inventory}
      onItemClick={this.handleDisplayDetail}
      onQuickSellClick={this.handleUpdateItem}/>
    }
    
    if (this.state.selectedItem !== null) {
      inventoryList = null;
      if (this.state.showUpdateForm === true) {
        detail = <Update 
                    item={this.state.selectedItem} 
                    toggleShowUpdateForm={this.handleUpdateClick}
                    onClose={this.handleCloseUpdate}
                    onUpdateSubmit={this.handleUpdateItem} />
      } else {
        detail = <Detail 
                    item={this.state.selectedItem} 
                    onUpdateClick={this.handleUpdateClick}
                    onClose={this.handleCloseDetail}
                    showBOH={this.props.showBOH}/>
      }
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
    let mpButton =  <Button 
                      onClick={this.handleAddClick}
                      variant="outline-dark"
                      >
                        {addButtonText}
                    </Button>;
    // only show button in BOH
    if (!this.props.showBOH) {
      mpButton = null;
    }

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