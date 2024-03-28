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
  const [impWords, setImpWords] = useState([]);
  let recData = "";
  let selectedImgs = [];

  useEffect(() => {
    if (!localStorage.getItem("recData")) {
      recData = JSON.stringify(recDataJson);
      console.log(recData);
      localStorage.setItem("recData", recData);
    }
    else {
      recData = localStorage.getItem("recData");
      console.log(recData);
    }
  }, [data])

  let voiceRecog = () => {
    const button = document.querySelector('button');
    const selectedButton = document.querySelector('.enterSelected');
    button.classList.add("loading");
    recData = localStorage.getItem("recData");
    axios.get("http://127.0.0.1:5000/", {
      params: {
        recData: recData
      }
    })
      .then(res => {
        setData(res.data[0]);
        console.log("The new receieved data is");
        console.log(res.data[1]);
        setImpWords(res.data[1]);
        // localStorage.setItem("recData", JSON.stringify(res.data[1]));
        button.style.display = "none";

        selectedButton.style.display = "flex";
      })
  }

  const toggleSelected = (event) => {
    event.preventDefault();
    const img = event.target;
    if (img.classList.contains("selected")) {
      img.classList.remove("selected");
      // selectedImgs.pop(Number(img.id));
      selectedImgs.splice(selectedImgs.indexOf(Number(img.id)), 1);
    }
    else {
      img.classList.add("selected");
      selectedImgs.push(Number(img.id))
      console.log(typeof (selectedImgs));
    }
    console.log(selectedImgs);
  }

  function addProducts() {
    const enterSelected = document.querySelector('.enterSelected');
    const button = document.querySelector('button');
    enterSelected.style.display = "none";
    setData("");
    if (selectedImgs.length === 0) return;

    recDataJson = JSON.parse(recData);
    console.log("recdata after json parse")
    console.log(typeof (recDataJson));
    console.log(recDataJson);
    for (let i = 0; i < selectedImgs.length; i++) {
      // selectedImgs[i] : selected image index
      // prods[selectedImgs[i]] : selected image name
      // recDataJson[prods[selectedImgs[i]]] : object of keywords for selected image
      console.log(recDataJson[prods[selectedImgs[i]]]);

      for (let j = 0; j < impWords.length; j++) {
        // If word already exists
        if (Object.keys(recDataJson[prods[selectedImgs[i]]]).indexOf(impWords[j]) != -1 ) {
          recDataJson[prods[selectedImgs[i]]][impWords[j]]++;
        }
        // If word does not exist
        else {
          recDataJson[prods[selectedImgs[i]]][impWords[j]] = 1;
        }
      }

      recData = JSON.stringify(recDataJson);
      localStorage.setItem("recData", recData);

      button.style.display = "flex";
      button.classList.remove("loading");
    }
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
        <button onClick={addProducts} className="enterSelectedButton">
          <span className="enterSelectedText">ENTER THE SELECTED PRODUCTS</span>
        </button>
      </div>
    </div>
  );
}

export default App;
