import React from 'react';
import './Product.css';
import {useStateValue} from './StateProvider';

function Product({ id,title, price, image,rating}){
// eslint-disable-next-line no-unused-vars
const [state, dispatch] = useStateValue();

const addToBasket = () => {
  dispatch({
    type: "ADD_TO_BASKET",
    item: {
      id: id,
      image: image,
      price: price,
      rating: rating,
    },
  });
};

    return(
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product_rating'>
                    {Array(rating)
                    .fill()
                    .map((_, i)=>(
                    <span role='img' aria-label='product-rating'>⭐️</span>   
                    ))}
                </div>
            </div>
        <img src={image} alt='product img' />
        <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
}

export default Product;