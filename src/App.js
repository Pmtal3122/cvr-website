import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import '../src/constants/products.json'
import recDataJson from './constants/recommenderData.json'
import { prods, prodImages } from './constants/productsArray';
import ProductsDisplay from './Components/ProductsDisplay/ProductsDisplay';
// import { prodImages } from './constants/productsImages';

function App() {
  const [data, setData] = useState("");
  let recData = "";

  useEffect(() => {
    // console.log(prods)
    console.log(data);
    console.log(typeof (data))
    console.log(Object.values(data));
    if(!localStorage.getItem("recData")) {
      recData = JSON.stringify(recDataJson);
      console.log(recData);
      localStorage.setItem("recData", recData);
    }
    else {
      recData = localStorage.getItem("recData");
    }
  }, [data])

  let voiceRecog = () => {
    axios.get("http://127.0.0.1:5000/", {
      params: {
        recData: recData
      }
    })
      .then(res => {
        setData(res.data[0]);
        console.log("The new receieved data is");
        console.log(JSON.stringify(res.data[1]));
        localStorage.setItem("recData", JSON.stringify(res.data[1]));
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
