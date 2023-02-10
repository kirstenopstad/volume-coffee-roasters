import React from "react";

const Add = () => {
  return(
    <form>
      <h3>Add</h3>
      <input type="text" placeholder="Name" name="name"/>
      <input type="text" placeholder="Origin" name="origin"/>
      <input type="number" placeholder="Price" name="price"/>
      <input type="text" placeholder="Roast" name="roast"/>
      <button type="submit">Add</button>
    </form>
  );
}
export default Add;