import {Component} from "react";
import img0 from '../images/0_Backpack.jpg'
import img1 from '../images/1_Sneakers.jpg'
import img2 from '../images/2_Dress.jpeg'
import img3 from '../images/3_Sunglasses.jpg'
import img4 from '../images/4_Hat.jpg'
import img5 from '../images/5_Gloves.jpg'
import img6 from '../images/6_Tshirt.jpg.webp'
import img7 from '../images/7_Jeans.jpeg'
import img8 from '../images/8_Watch.jpg'
import img9 from '../images/9_Belt.jpg'

class productsArray extends Component{
    constructor(props){
        super(props);
        this.prods = ["Backpacks", "Sneakers", "Dress", "Sunglasses", "Hat", "Gloves", "T-Shirts", "Jeans", "Watch", "Belt"]
        this.prodImages = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9];
    }
}

export const prods = new productsArray().prods
export const prodImages = new productsArray().prodImages;