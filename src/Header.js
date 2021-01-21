import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthenication = () => {
        if(user) {
              auth.signOut();
        } 
    }


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
              <Link to={!user && "/login"} >
                <div onClick={handleAuthenication} className="header__option">
                    <span className="header__optionLineOne">こんにちは{!user ? 
                    "ゲスト" : user?.email}さん</span>
                    <span className="header__optionLineTwo">{user ? 
                    "サインアウト" : "サインイン"}</span>
                </div>
              </Link>
              <Link to="/orders">
                <div className="header__option">
                    <span className="header__optionLineOne">返品はこちら</span>
                    <span className="header__optionLineTwo">注文履歴</span>
                </div>
              </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">ショッピング</span>
                    <span className="header__optionLineOne">カート</span>
                </div>
                <Link to={user ? 
                "/checkout" : "/login"}>   
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo 
                    header__basketCount">{basket?.length}</span>
                </div>
                </Link>

            </div>


        </div>
    );
}

export default Header;
