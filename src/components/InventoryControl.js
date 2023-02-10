import React from "react";
import inventorySeedData from "./InventorySeedData";
import List from  './List';

const InventoryControl = () => {
  return(
    <List inventory={inventorySeedData}/>
    // Detail
    // Add
  );
}
export default InventoryControl;