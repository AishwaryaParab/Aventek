import React from 'react';
import "./Catalog.css";

const CatalogItem = ({title, products, image}) => {
  return (
    <div className='catalog-item'>
        <div className="catalog-item-content">
            <h3>{title}</h3>

            <div className="products">
                {products.map((item, index) => {
                    return <div className="product-list">
                        <p className='product-list-number'>{item.number}</p>
                        <p className='product-list-name'>{item.name}</p>
                    </div>
                })}
            </div>
        </div>

        <div className="catalog-image">
            <img src={image} className="catalog-item-image"/>
        </div>    
    </div>
  )
}

export default CatalogItem
