import React from 'react';
import "./ProductCard.css";
import { IoCartOutline } from 'react-icons/io5';

const ProductCard = ({ product }) => {
    console.log(product);
    return (
        <div className="product-card">
            <div className="product-image-wrapper">
            <img src={product.image} alt="" className="product-image" />
            </div>
            <h1 className='product-title'>{product.title}</h1>
            <p className='product-price'>${product.price}</p>
            <button className='Add-to-cart'> <IoCartOutline/> Add to Cart </button>
        </div>
    );
};

export default ProductCard;
