import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import '../src/constants/products.json'
import { prods, prodImages } from './constants/productsArray';
import ProductsDisplay from './Components/ProductsDisplay/ProductsDisplay';
// import { prodImages } from './constants/productsImages';

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    // console.log(prods)
    console.log(data);
    console.log(typeof (data))
    console.log(Object.values(data));
  }, [data])

  let voiceRecog = () => {
    axios.get("http://127.0.0.1:5000/")
      .then(res => {
        setData(res.data);
      })
  }
  return (
    <div id='bodyDiv'>
      <ProductsDisplay />
      <div id="recogButton">
        <button onClick={voiceRecog}>RECOMMEND PRODUCTS</button>
      </div>
      <div id="displayRecommended">
        {Object.values(data).map(ele => (
          <li>
            {prods[ele].toUpperCase()}
            <img width="200px" src={prodImages[ele]} alt="" />
          </li>
        ))}
      </div>
    </div>
  );
}

export default App;
