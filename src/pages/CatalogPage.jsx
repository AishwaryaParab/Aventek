import React from 'react'
import { Navbar, Strip } from '../components'
import Catalog from '../components/Catalog'

const CatalogPage = () => {
  return (
    <div>
        <Navbar />
        <Catalog />
        <Strip />
    </div>
  )
}

export default CatalogPage