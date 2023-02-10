import React from "react";
import inventorySeedData from "./InventorySeedData";
import Item from  './Item';
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
  
  handleQuickSale = (item) => {
    const updatedInventory = this.state.inventory.concat(item);
    this.setState({inventory: updatedInventory})
    // const poundsOfItemToSell = this.state.inventory.filter(element => element.id === id)[0].poundsInStock;
    // this.setState(prevState => ({ poundsOfItemToSell: prevState.poundsOfItemToSell++ })
  }

  render() {
    let detail = null;
    let item = this.state.inventory.map((element) => (
      <Item 
        name={element.name}
        origin={element.origin}
        price={element.price}
        roast={element.roast}
        unitsInStock={element.unitsInStock}
        poundsInStock={element.poundsInStock}
        id={element.id}
        key={element.id} 
        onItemClick={this.handleDisplayDetail}
        onQuickSellClick={this.handleQuickSale}/>
    ))
    
    if (this.state.displayAdd){
    } 
    
    if (this.state.selectedItem !== null) {
      detail = <Detail item={this.state.selectedItem}/>
    }
    
    return(
      <React.Fragment>
        <Add onAddClick={this.handleAddItem}/>
        {detail}
        {item}
      </React.Fragment>
    );
  }
}
export default InventoryControl;