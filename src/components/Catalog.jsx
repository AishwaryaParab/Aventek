import React from 'react';
import "./Catalog.css";
import {catalog} from "../data/catalog";
import CatalogItem from './CatalogItem';

const Catalog = () => {
  return (
    <div className="catalog">
      <div className="catalog-title">
        <h1>Catalog</h1>
      </div>

      <div className="catalog-content">
        {catalog.map((item, index) => {
          return <CatalogItem key={index} title={item.title} products={item.products} image={item.image} />
        })}
      </div>


    </div>
  )
}

export default Catalog

