import { useContext } from "react"
import ProductContext from "../contexts/ProductContext"
import {FaEdit, FaTrash} from 'react-icons/fa'

const ProductDetails = ({product, num}) => {
    const {dispatch} = useContext(ProductContext);
  return (
  <tr>
      <td>{++num}</td>
      <td>{product.name}</td>
      <td>{product.quantity}</td>
      <td>< FaTrash className="text-danger" onClick={()=> dispatch({type: 'REMOVE_PRODUCT', id: product.id})} /></td>
  </tr>
  );
}

export default ProductDetails
