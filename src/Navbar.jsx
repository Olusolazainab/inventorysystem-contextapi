import { useContext } from 'react';
import ProductContext from './contexts/ProductContext';

const Navbar = () => {
	const { products } = useContext(ProductContext);
	return (
		<div className='bg-primary'>
			
				<h2 className='text-light text-center'>Inventory Management App</h2>
            
				<div className=' d-flex justify-content-end pe-5 text-light text-uppercase'>Total Product:  {products.length}</div>
			</div>
		
	);
};

export default Navbar;
