import React from "react";
import inventorySeedData from "./InventorySeedData";
import List from  './List';
import Detail from './Detail';
import Add from './Add';

const InventoryControl = () => {
  const detailItem = inventorySeedData[0];
  return(
    <React.Fragment>
      <List inventory={inventorySeedData}/>
      <Detail item={detailItem}/>
      <Add />
    </React.Fragment>
  );
}
export default InventoryControl;