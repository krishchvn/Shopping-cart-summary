import React from 'react';
import './Est_total.css'

function Est_total({est__total}) {
    return (
        <div className="est">
            <h3 className="est__tot">Est. total</h3>
            <h3 className = 'est__price'>${est__total}</h3>
        </div>
    )
}

export default Est_total
