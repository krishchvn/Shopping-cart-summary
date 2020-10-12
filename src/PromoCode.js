import React, { useState } from 'react';
import './PromoCode.css';
import promoCode from './actions/action';
import { useSelector, useDispatch } from 'react-redux';

function PromoCode({ price }) {
  const [visible, setVisible] = useState(false);
  const onClick = () => setVisible((useState) => !useState);

  const promoCode = useSelector((state) => state.promoCodeReducer);
  const dispatch = useDispatch();

  return (
    <div className='container'>
      <button className='promoCode__btn' onClick={onClick}>
        {visible === false ? 'Apply promo code' : 'Hide promo code'}
      </button>
      <div
        className='container2'
        style={visible ? { display: 'block' } : { display: 'none' }}>
        <div className='promoCode'>
          <h7>Promo Code</h7>
          <input type='text' placeholder='Enter promo code' />
          <button onClick={() => dispatch(promoCode())}>Apply</button>
        </div>
      </div>
    </div>
  );
}

// when promoCode() is run, the value of price in est_total.js should be changed.

export default PromoCode;
