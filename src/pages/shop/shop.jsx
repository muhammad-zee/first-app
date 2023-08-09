import React, { Component } from 'react';
import { PRODUCTS } from '../../products';
import Product from './product';

const Shop = () => {
    return ( <div className='shop'>
        <div className='shopTitle'>
            <h1>Protech Shop</h1>
        </div>
        <div className='products'>
            {
                PRODUCTS.map((product) => (
                    <div>{<Product data={product} />}</div>
                ))
            }    
        </div> 
    </div> );
}
 
export default Shop;