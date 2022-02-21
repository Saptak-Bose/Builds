import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
         <img
           className="home__image"
           src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/TV/BRND/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-US_PVD5676._CB404165680_.jpg"
           alt=""
          />

          <div className="home__row">
            <Product 
            id="35548950"
            title="Gullivers Travels : Illustrated abridged Classics (Om Illustrated Classics): by Jonathan Swift  | 1 January 2012" 
            price={400.65} 
            image="https://images-na.ssl-images-amazon.com/images/I/51jzzXI5WoL._SX354_BO1,204,203,200_.jpg" 
            rating={5}
            />
            <Product 
            id="1009387437" 
            title="Hamilton Beach Professional Juicer Mixer Grinder 58770-IN, 1400 Watt Rated Motor, Triple Overload Protection, 3 Stainless Steel Leakproof Jars, Triple Safety Protection, Intelligent Controls, Black" 
            price={19999.01} 
            image="https://m.media-amazon.com/images/I/61fn6h+6b+L._SL1000_.jpg" 
            rating={4}
            />
          </div>

          <div className="home__row">
            <Product 
            id="49921849" 
            title="Echo (4th Gen, 2020 release) | Premium sound powered by Dolby and Alexa (Blue)" 
            price={5999.65} 
            image="https://m.media-amazon.com/images/I/61NIsUGl+FL._SY450_.jpg" 
            rating={5} />
            <Product 
            id="7214630058"
            title="Apple iPhone 13 Pro Max (512GB) - Graphite"
            price={160000.89}
            image="https://m.media-amazon.com/images/I/61IJBsHm97L._SL1500_.jpg"
            rating={5}
            />
            <Product
            id="5661209"
            title="ASUS ROG STRIX NVIDIA GeForce RTX 3070 Gaming Graphics Card (PCIe 4.0, 8GB GDDR6, HDMI 2.1, DisplayPort 1.4a, Axial-Tech Fan Design, 2.9-Slot, Super Alloy Power II, GPU Tweak II)"
            price={155670.99}
            image="https://m.media-amazon.com/images/I/81DOtdsS1sL._SL1500_.jpg"
            rating={5} />
          </div>

          <div className="home__row">
            <Product
            id="98871142"
            title="Mi 138.8 cm (55 Inches) 4K Ultra HD Android Smart LED TV 4X | L55M5-5XIN (Black)"
            price={46913.87}
            image="https://m.media-amazon.com/images/I/61V7cDH8AAS._SL1188_.jpg"
            rating={4} />
          </div>
      </div>
    </div>
  );
}

export default Home
