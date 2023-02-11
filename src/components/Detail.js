import React from "react";
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

const Detail = ({ item }) => {
  
  return (
    <React.Fragment>
      <div className="Detail">
        <h3>Detail</h3>
        <Image src={item.image} fluid/>
        <h4>{item.name}</h4>
        <Table>
          <thead>
            <tr>
              <th>Price</th>
              <th>Roast</th>
              <th>Origin</th>
              <th>In Stock</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${item.price}</td>
              <td>{item.roast}</td>
              <td>{item.origin}</td>
              <td>{item.poundsInStock} lbs.</td>
            </tr>
          </tbody>
        </Table>
        <Button>Update</Button>
        <Button>Delete</Button>
        <Button>Restock</Button>
      </div>
    </React.Fragment>
  )
}

Detail.propTypes = {
  item: PropTypes.object
}
export default Detail;