import './App.css';
import ProductForm from './components/ProductForm';
import { ProductContextProvider } from './contexts/ProductContext';
import Navbar from './Navbar';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className='container'>
     <ProductContextProvider>
       <Navbar />
       <ProductForm />
       <ProductList />
     </ProductContextProvider>
    </div>
  );
}

export default App;
