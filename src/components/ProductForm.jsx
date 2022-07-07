import { useContext, useState } from "react"
import ProductContext from "../contexts/ProductContext"



const ProductForm = () => {
    const {dispatch} = useContext(ProductContext)
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch({type: 'ADD_PRODUCT', product:{name, quantity}})
        setName('')
        setQuantity('')
        }
        
        const handleProductName = (e)=>{
            setName(e.target.value)
        }
        
        const handleProductQuantity = (e)=>{
            setQuantity(e.target.value)
        }
        return (
            <div className="card shadow mt-3">
                <div className="card-body">
              <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                      <label>Product Name:</label>
                      <input type='text' value={name} className='form-control' onChange={handleProductName} required />
                  </div>
                  <div className="mb-3">
                      <label>Quantity:</label>
                      <input type='number' value={quantity} className='form-control' onChange={handleProductQuantity} required />
                  </div>
                 
              <button type='submit' className="btn btn-primary">Add Product</button>
              </form>
            </div>
            </div>
          )
}

export default ProductForm
