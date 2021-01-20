import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
          <div class="checkout__left">
            <img 
              className="checkout__adsense" 
              src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
              alt="" 
            />

            <div>
              <h3>こんにちは、{user?.email}さん</h3>
              <h2 className="checkout__title">
                ショッピングカート
              </h2> 
              {basket.map(item => (
                 <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}

                 />
              ))}

            </div>
           </div>

           <div className="checkput__right">
                <Subtotal />

           </div>
        </div>
    );
    
}

export default Checkout;
