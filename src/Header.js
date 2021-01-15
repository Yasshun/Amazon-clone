import React from 'react';
import './Header.css';
// import SearchIcon from 


function Header() {
    return (
        <div className="header"> 
            <img className="header__logo" src="https:mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"/>

            <div className="header__search">
                <input className="header__serchInput" type="text"/>
                {/* logo */}
            </div>

            <div className="header__nav">
                <div className="header__option">
                    
                </div>

                <div className="header__option">

                </div>
                
                <div className="header__option">

                </div>

            </div>


        </div>
    );
}

export default Header;
