import React, { useState } from 'react'
import { prodImages, prods } from '../../constants/productsArray'
// import { prods } from '../../constants/productsArray'
import styles from './productsDisplay.module.css'
// import rightArrowSvg from '../../images/right-arrow-svgrepo-com.svg'
// import { ReactSVG } from 'react'

function ProductsDisplay() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    return (
        <>
            <div id={styles.productsCatalogue}>
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
                        style={{  }}
                        onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                            <img src={ele} alt="" />
                        </div>
                    ))}
                </div>
                {/* <div id={styles.rightArrow}> */}
                {/* <svg fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"></path> </g></svg> */}
                {/* <ReactSVG src={rightArrowSvg} /> */}
                {/* </div> */}
            </div>
        </>
    )
}

export default ProductsDisplay
