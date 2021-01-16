import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';



function Header() {
    return (
        <div className="header"> 
            <Link to="/">
            <img 
              className="header__logo" 
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              />
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">こんにちは</span>
                    <span className="header__optionLineTwo">サインイン</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">返品はこちら</span>
                    <span className="header__optionLineTwo">注文履歴</span>
                </div>

                <div className="header__option">
                    {/* <span className="header__optionLineOne"></span> */}
                    <span className="header__optionLineTwo">カート</span>
                </div>
                <Link to="/checkout">   
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo 
                    header__basketCount">0</span>
                </div>
                </Link>

            </div>


        </div>
    );
}

export default Header;
