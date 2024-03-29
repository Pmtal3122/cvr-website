import React, { useEffect, useRef, useState } from 'react'
import { prodImages, prods } from '../../constants/productsArray'
import styles from './productsDisplay.module.css'
import gsap from 'gsap';

function ProductsDisplay() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const imagesRef = useRef([]);
    const rightArrowDiv = useRef(null);
    const leftArrowDiv = useRef(null);
    const productsCatalogue = useRef(null);

    useEffect(() => {
        rightArrowDiv.current.style.height = `${productsCatalogue.current.offsetHeight}px`;
        leftArrowDiv.current.style.height = `${productsCatalogue.current.offsetHeight}px`;
        console.log("Products catalogue height: " + productsCatalogue.current.offsetHeight);
        console.log("Right arrow div height: " + rightArrowDiv.current.offsetHeight);
        imagesRef.current.forEach((image, index) => {
            gsap.from(image, {
                y: -50,
                duration: 1,
                delay: index * 0.1,
                opacity: 0
            });
        });
    }, [])

    function rightArrowClick() {
        productsCatalogue.current.scrollLeft = productsCatalogue.current.scrollWidth - productsCatalogue.current.clientWidth;
    }

    function leftArrowClick() {
        productsCatalogue.current.scrollLeft = 0;
    }

    return (
        <>
            <div id={styles.productsCatalogue} ref={productsCatalogue}>
                <div id={styles.productDetails}>
                    {
                        prods.map((ele, index) => (
                            <p key={index} id={styles.prodName} style={{ transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(100px)' }}>
                                {ele.toUpperCase()}
                            </p>
                        ))
                    }
                </div>
                <div className={styles.productImages}>
                    {prodImages.map((ele, index) => (
                        <div key={index} id={styles.imgName}
                            ref={el => imagesRef.current[index] = el}
                            onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                            <img src={ele} alt="" />
                        </div>
                    ))}
                </div>
                <div id={styles.rightArrow} ref={rightArrowDiv} onClick={rightArrowClick}>
                    <svg id={styles.rightArrowSvg} fill="#000000" height="200px" width="200px" viewBox="0 0 330 330">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path id={styles.rightArrowSvgPath} d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"></path>
                        </g>
                    </svg>

                </div>
                <div id={styles.leftArrow} ref={leftArrowDiv} onClick={leftArrowClick}>
                <svg fill="#000000" height="200px" width="200px" id={styles.leftArrowSvg} viewBox="0 0 330.002 330.002"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id={styles.leftArrowSvgPath} d="M233.25,306.001L127.5,165.005L233.25,24.001c4.971-6.628,3.627-16.03-3-21c-6.627-4.971-16.03-3.626-21,3 L96.75,156.005c-4,5.333-4,12.667,0,18l112.5,149.996c2.947,3.93,7.451,6.001,12.012,6.001c3.131,0,6.29-0.978,8.988-3.001 C236.878,322.03,238.221,312.628,233.25,306.001z"></path> </g></svg>
                </div>
            </div>
        </>
    )
}

export default ProductsDisplay
