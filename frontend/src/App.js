import React,{useState,useEffect} from 'react';
import axios from 'axios';

function App() {
  const[products,setProducts]=useState([]);

  useEffect(()=>{
    axios.get('/api/products')
      .then(response=>setProducts(response.data))
      .catch(error=>console.error('Error:',error));
  },[]);

  return (
    <div className="App">
      <h1>Product Catalog</h1>
      <div className="products">
        {products.map(product=>(
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
