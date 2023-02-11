import React from "react";
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import CloseButton from 'react-bootstrap/CloseButton';

const Detail = ({ item, onClose }) => {
  
  return (
    <React.Fragment>
      <div className="detail">
        <div className="detail-header">
          <h3>Detail</h3>
          <CloseButton aria-label="Hide" onClick={onClose} />
        </div>

        <Image src={item.image} fluid/>

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

        <Button disabled>Update</Button>
        <Button disabled>Delete</Button>
        <Button disabled>Restock</Button>
        
      </div>
    </React.Fragment>
  )
}

Detail.propTypes = {
  item: PropTypes.object,
  onClose: PropTypes.func
}
export default Detail;