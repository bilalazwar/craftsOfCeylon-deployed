import React from 'react'
import { useState, useEffect } from 'react';
import NavigationBar from '../components/navigation-bar/NavigationBar'
import WindowSize from '../components/WindowSize';
import '../styles/page-style/home.css';
import triangleLeft from '../images/triangleLeft.png';
import triangleRight from '../images/triangleRight.png';
import sarongCategory from '../images/sarongCategory.png';
import maskCategory from '../images/maskCategory.png';
import bambooCraftCategory from '../images/bambooCraftCategory.png';
import potteryCategory from '../images/potteryCategory.png';
import WoodworksCategory from '../images/woodWorkCategory.png';
import metalworkCategory from '../images/metalworkCategory.png';


import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';
import p4 from '../images/p4.png';
import p5 from '../images/p5.png';
import p6 from '../images/p6.png';
import p7 from '../images/p7.png';


export default function Home() {

    // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const windowSizeObject = WindowSize();      //Receiving the returned Object and assigning
    const windowWidth = windowSizeObject.windowWidth;
    const windowHeight = windowSizeObject.windowHeight;

    useEffect(() => {

      }, []);

  return (
    <div>
        <NavigationBar/>
        {/* <div>
            <p>Width: {windowWidth} pixels</p>  
            <p>Height: {windowHeight} pixels</p> 
        </div> */}
        <div className='landingHomeExplore'>

          <div className='leftButton'>
            <img src={triangleLeft} alt='Left triangle'/>
          </div>

          <div className='landingProductCard'>
            <h1>Explore the Craftsmanship of Sri Lanka's <br/>Finest Artisans</h1>
            <p>Experience the Fusion of Tradition and Innovation, <br/>Unearth Exceptional Handcrafted Creations</p>
          </div>

          <div className='rightButton'>
            <img src={triangleRight} alt='Right triangle'/>
          </div>

        </div>
        <div className='announcement'>
            <span>Top Seller</span><span>Top Seller</span><span>Top Seller</span><span>Top Seller</span><span>Top Seller</span><span>Top Seller</span>
            <span>Top Seller</span><span>Top Seller</span><span>Top Seller</span><span>Top Seller</span><span>Top Seller</span><span>Top Seller</span>
            <span>Top Seller</span><span>Top Seller</span><span>Top Seller</span><span>Top Seller</span><span>Top Seller</span><span>Top Seller</span>
            <span>Top Seller</span><span>Top Seller</span><span>Top Seller</span><span>Top Seller</span><span>Top Seller</span><span>Top Seller</span>
            <span>Top Seller</span><span>Top Seller</span><span>Top Seller</span><span>Top Seller</span><span>Top Seller</span><span>Top Seller</span>
            <span>Top Seller</span><span>Top Seller</span><span>Top Seller</span><span>Top Seller</span><span>Top Seller</span><span>Top Seller</span>
        </div>

        {/* here fetches some products from database */}
        <div className='productExplore'>

          <div className='browseByCategory'>
            <h2>Browse By Category</h2>

            <div className='allCategoryCards'>
              
              <div className='categoryCard'>
                <img src={sarongCategory} alt='sarongCategory'/>
                <p>Sarongs</p>
              </div>

              <div className='categoryCard'>
                <img src={maskCategory} alt='maskCategory'/>
                <p>Traditional Masks</p>
              </div>

              <div className='categoryCard'>
                <img src={bambooCraftCategory} alt='bambooCraftCategory'/>
                <p>Bamboo Crafts</p>
              </div>

              <div className='categoryCard'>
                <img src={potteryCategory} alt='potteryCategory'/>
                <p>Pottery</p>
              </div>

              <div className='categoryCard'>
                <img src={WoodworksCategory} alt='WoodworksCategory'/>
                <p>Woodworks</p>
              </div>

              <div className='categoryCard'>
                <img src={metalworkCategory} alt='metalworkCategory'/>
                <p>Metalworks</p>
              </div>

            </div>

          </div>
          <div className='popularProducts'>
            <h2>Popular Products</h2>
            <div className='allPopularProductCards'>


              <div className='popularProductCard'>
                
                <label className='newLable'>New</label>
                <h4 className='productName'>Brass Elephant Bowl</h4>
                <p className='productDescription'>Store treasures or serve in style with this</p>
                <img src={metalworkCategory} alt=''/>
                <div className='priceLine'>
                  <label className='price'>රු. 6,220</label>
                  <button>Buy</button>
                </div>

              </div>

              <div className='popularProductCard'>

                <label className='newLable'>New</label>
                <h4 className='productName'>Bamboo Storage Box</h4>
                <p className='productDescription'>Organize in style with sustainable bamboo.</p>
                <img src={p1} alt=''/>
                <div className='priceLine'>
                  <label className='price'>රු. 3,514</label>
                  <button>Buy</button>
                </div>
              </div>

              <div className='popularProductCard'>

                <label className='newLable'>New</label>
                <h4 className='productName'>Batik Sarong (A)</h4>
                <p className='productDescription'>Lightweight elegance, perfect for beach or breeze.</p>
                <img src={p2} alt=''/>
                <div className='priceLine'>
                  <label className='price'>රු. 2,150</label>
                  <button>Buy</button>
                </div>
                
              </div>
              <div className='popularProductCard'>

                <label className='newLable'>New</label>
                <h4 className='productName'>FIRE DEMON</h4>
                <p className='productDescription'>Dance with flames, ignite tradition: Sri Lankan Mask.</p>
                <img src={p3} alt=''/>
                <div className='priceLine'>
                  <label className='price'>රු. 6,500</label>
                  <button>Buy</button>
                </div>
                
              </div>

              <div className='popularProductCard'>

                <label className='newLable'>New</label>
                <h4 className='productName'>Brass Candle Stand</h4>
                <p className='productDescription'>Create a cozy haven with the warm glow</p>
                <img src={p4} alt=''/>
                <div className='priceLine'>
                  <label className='price'>රු. 7,650</label>
                  <button>Buy</button>
                </div>
                
              </div>

              <div className='popularProductCard'>

                <label className='newLable'>New</label>
                <h4 className='productName'>Handloom Shirt</h4>
                <p className='productDescription'>Where comfort meets conscious style.</p>
                <img src={p5} alt=''/>
                <div className='priceLine'>
                  <label className='price'>රු. 3,999</label>
                  <button>Buy</button>
                </div>
                
              </div>

              <div className='popularProductCard'>

                <label className='newLable'>New</label>
                <h4 className='productName'>Handloom Shalwar</h4>
                <p className='productDescription'>Breathable handloom shalwar, gentle on skin and Earth.</p>
                <img src={p6} alt=''/>
                <div className='priceLine'>
                  <label className='price'>රු. 4,870</label>
                  <button>Buy</button>
                </div>
                
              </div>

              <div className='popularProductCard'>

                <label className='newLable'>New</label>
                <h4 className='productName'>Fruit Basket</h4>
                <p className='productDescription'>A vibrant assortment of seasonal fruits.</p>
                <img src={p7} alt=''/>
                <div className='priceLine'>
                  <label className='price'>රු. 2,400</label>
                  <button>Buy</button>
                </div>
                
              </div>
              

            </div>


          </div>
          <div className='subscribeForm'>

          </div>
          <div className='blog'>
            <h2>From our Blog</h2>

          </div>

        </div>
        <div className='footer'>

        </div>
    </div>
  )
}
