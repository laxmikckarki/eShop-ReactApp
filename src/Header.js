import React from 'react';
import './Header.css';
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header(){
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();
  return( 
    <div className='header'>
      <Link to="/" style={{ textDecoration: 'none' }}>
      <div className='header_logo'>
        <StorefrontIcon className='header_logoImage' fontSize='large'/>
        <h2 className='header_logoTitle'>eShop</h2>
      </div>
      </Link>

      <div className='header_search'>
        <input type='text' className='header_searchInput'/>
        <SearchIcon className='header_searchIcon'/>
      </div>

      <div className='header_nav'>
        <div className='nav_item'>
          <span className='nav-itemLineOne'>Hello Guest</span>
          <Link to='/login' className='nav_itemLineTwo'>Sign In</Link>
        </div>
        <div className='nav_item'>
          <span className='nav-itemLineOne'>Your</span>
          <span className='nav_itemLineTwo'>Shop</span>
        </div>

        <Link to="/checkout" style={{ textDecoration: 'none' }}>
          <div className='nav_itemBasket'>
            <ShoppingBasketIcon />
            <span className='nav_itemLineTwo nav_basketCount'>{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;