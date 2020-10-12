import React from 'react';
import './SPE.css';
import Est_total from './Est_total';
import ItemDetails from './ItemDetails';
import PromoCode from './PromoCode';

function SPE({ subtotal__price, pickup__savings__price, taxes__and__fees }) {
  const est__total =
    subtotal__price + pickup__savings__price + taxes__and__fees;

  return (
    <div className='container'>
      <div className='spe'>
        <div className='subtotal'>
          <p>Subtotal</p>
          <span>${subtotal__price}</span>
        </div>
        <div className='pickup__savings'>
          <p>Pickup Savings</p>
          <span>${pickup__savings__price}</span>
        </div>
        <div className='taxes__fees'>
          <p>Est. Taxes & fees</p>
          <span>${taxes__and__fees}</span>
        </div>
      </div>
      <Est_total est__total={est__total} />
      <ItemDetails price = {est__total} />
      <PromoCode price = {est__total} />
    </div>
  );
}

export default SPE;

