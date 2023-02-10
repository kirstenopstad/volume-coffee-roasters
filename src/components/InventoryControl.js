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
      displayAdd: false
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

  render() {
    let detail = null;
    let list = null;
    
    if (this.state.displayAdd){
    } 
    
    if (this.state.selectedItem !== null) {
      detail = <Detail item={this.state.selectedItem}/>
    }
    
    if (this.state.displayInventory) {
      list = <List inventory={this.state.inventory} onItemClick={this.handleDisplayDetail}/>
    }
    
    return(
      <React.Fragment>
        <Add />
        {detail}
        {list}
      </React.Fragment>
    );
  }
}
export default InventoryControl;