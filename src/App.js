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
  let selectedImgs = [];

  useEffect(() => {
    // console.log(prods)
    // console.log(data);
    // console.log(typeof (data))
    // console.log(Object.values(data));
    if(!localStorage.getItem("recData")) {
      recData = JSON.stringify(recDataJson);
      console.log(recData);
      localStorage.setItem("recData", recData);
    }
    else {
      recData = localStorage.getItem("recData");
      console.log(recData);
    }
  }, [data])

  let voiceRecog =  () => {
    const button = document.querySelector('button');
    const selectedButton = document.querySelector('.enterSelected');
    button.classList.add("loading");
    axios.get("http://127.0.0.1:5000/", {
      params: {
        recData: recData
      }
    })
      .then(res => {
        setData(res.data[0]);
        console.log("The new receieved data is");
        console.log(JSON.stringify(res.data[1]));
        // localStorage.setItem("recData", JSON.stringify(res.data[1]));
        button.classList.remove("loading");


        selectedButton.style.display = "flex";
      })
  }

  const toggleSelected = (event) => {
    const img = event.target;
    if(img.classList.contains("selected")) {
      img.classList.remove("selected");
      // selectedImgs.pop(Number(img.id));
      selectedImgs.splice(selectedImgs.indexOf(Number(img.id)), 1);
    }
    else {
      img.classList.add("selected");
      selectedImgs.push(Number(img.id))
      console.log(typeof(selectedImgs));
    }
    console.log(selectedImgs);
  }
  return (
    <div id='bodyDiv'>
      <ProductsDisplay />
      <div id="recogButton">
        <button onClick={voiceRecog}>
          <span className='button-text'>RECOMMEND PRODUCTS</span>

          <div className="button-loader">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </button>
      </div>
      <div id="displayRecommended">
        {Object.values(data).map(ele => (
          <li>
            {prods[ele].toUpperCase()}
            <img id={ele} className='recommendedImg' width="200px" onClick={(event) => toggleSelected(event)} src={prodImages[ele]} alt="" />
          </li>
        ))}
      </div>
      <div className="enterSelected">
        <button className="enterSelectedButton">
          <span className="enterSelectedText">ENTER THE SELECTED PRODUCTS</span>
        </button>
      </div>
    </div>
  );
}

export default App;
