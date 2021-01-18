import React from 'react';
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            {/* Price */}
            <CurrencyFormat 
              renderText = {(value) => (
                <>
                   <p>
                       小計 ({basket.length} 点):
                       <strong>{value}</strong>
                   </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" />ギフトの設定
                    </small>
                </>
              )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparater={true}
                prefix={"¥"}
            />
            <button className="subtotal__button">レジに進む</button>
        </div>
    )
}
//　pa
export default Subtotal;
