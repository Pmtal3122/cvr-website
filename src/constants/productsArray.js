import {Component} from "react";
import img0 from '../images/0_Backpack.jpg'
import img1 from '../images/1_Sneakers.jpg'
import img2 from '../images/2_Dress.jpg'
import img3 from '../images/3_Sunglasses.jpg'
import img4 from '../images/4_Hat.jpg'
import img5 from '../images/5_Gloves.jpg'
import img6 from '../images/6_Tshirt.jpg.webp'
import img7 from '../images/7_Jeans.jpeg'
import img8 from '../images/8_Watch.jpg'
import img9 from '../images/9_Belt.jpg'
import img10 from '../images/10_Laptop.jpg'
import img11 from '../images/11_Mobile.webp'
import img12 from '../images/12_Book.jpg'
import img13 from '../images/13_Sports.jpg'
import img14 from '../images/14_Gaming.jpg'

class productsArray extends Component{
    constructor(props){
        super(props);
        this.prods = ["backpacks", "sneakers", "dress", "sunglasses", "hat", "gloves", "t-shirts", "jeans", "watch", "belt", "laptop", "mobile", "book", "sports", "gaming"];
        this.prodImages = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14];
    }
}

export const prods = new productsArray().prods
export const prodImages = new productsArray().prodImages;