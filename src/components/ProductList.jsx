import React, { useContext } from 'react'
import ProductContext from '../contexts/ProductContext'
import ProductDetails from './ProductDetails'

const ProductList = () => {
    const {products} = useContext(ProductContext);
  return products.length ? (
      <div className='card card-body shadow mt-5'>
          <h4 className='text-center'>Product List</h4>
    <table className='table'>
        <thead>
            <tr>
                <th>SN</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Options</th>
            </tr>
        </thead>

        <tbody>
            {products.map((product, index) => {
                return(
                    <ProductDetails product={product} num= {index} key={index} />
                )
            })}
        </tbody>
    </table>
    </div>
  ) : (
      <div>No Product</div>
  )
}

export default ProductList
