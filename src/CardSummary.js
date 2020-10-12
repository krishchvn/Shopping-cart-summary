import React from 'react';
import { Card } from 'react-bootstrap';
import SPE from './SPE';
import './CardSummary.css'

function CardSummary() {
  const subtotal__price = 102.96;
  const pickup__savings__price = -3.85;
  const taxes__and__fees = 8.67;


  return (
    <Card className="card__" >

      <SPE
        subtotal__price={subtotal__price}
        pickup__savings__price={pickup__savings__price}
        taxes__and__fees={taxes__and__fees}
      />
      
    </Card>
  );
}

export default CardSummary;
