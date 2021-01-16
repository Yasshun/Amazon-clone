import React from 'react';
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat 
              renderText = {(value) => (
                <>
                   <p>
                       小計 (0 items):
                       <strong>{` ${value} `}</strong>
                   </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" />ギフトの設定
                    </small>
                </>
              )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparater={true}
                prefix={"¥"}
            />

            <button className="subtotal__button">レジに進む</button>
        </div>
    )
}

export default Subtotal;
