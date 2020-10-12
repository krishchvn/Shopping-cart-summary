import React, { useState } from 'react';
import './ItemDetails.css';

function ItemDetails({ price }) {
  const [visible, setVisible] = useState(false);
  const onClick = () => setVisible((useState) => !useState);

  return (
    <div className='container'>
      <button  onClick={onClick}>
        {visible === false ? 'See the items +' : 'Hide the items -'}
      </button>
      <div
        className='container2'
        style={visible ? { display: 'block' } : { display: 'none' }}>
        <div className='itemDetails'>
          <img
            className='itemDetails__img'
            src='https://ak1.ostkcdn.com/images/products/12331733/Racer-Style-Height-Adjustable-Sport-Office-PC-Gaming-Chair-Blue-d1f294e2-9a28-413e-9334-38d470452cfc.jpg'
            alt='itemDetails__img'
          />
          <div className='itemDetails__comp'>
            <p>
              Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Blue
            </p>
            <div className='itemDetails__comp__comp'>
              <div className='itemDetails__comp__comp__price'>
                <p>${price}</p>
                <h7>
                  <s>${price}</s>
                </h7>
              </div>
              <p>Qty: {1}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
