import React from "react";
import "./styles/Home.css";
import Product from "./Product";
import Slideshow from "./Slideshow";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <Slideshow />
        {/* <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        /> */}

        <div className="home_row">
          <Product
            id="12321341"
            title="Acer Predator Helios 500 Gaming Laptop (11Th Gen Intel Core I9/17.3 Inches 4K Uhd Display/64Gb Ddr4 Ram/2Tb Ssd/1Tb HDD/RTX 3080 Graphics/Windows 10 Pro/Per Key RGB Backlit Keyboard) Ph517-52"
            price={379999}
            image="https://m.media-amazon.com/images/I/81oz+NZ4QLL._SL1500_.jpg"
            rating={5}
          />
          <Product
            id="12321342"
            title="boAt Xtend Smartwatch with Alexa Built-in, 1.69” HD Display, Multiple Watch Faces, Stress Monitor, Heart & SpO2 Monitoring, 14 Sports Modes, Sleep Monitor, 5 ATM & 7 Days Battery(Pitch Black)"
            price={1999}
            image="https://m.media-amazon.com/images/I/61IMRs+o0iL._SX522_.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="12321343"
            title="pTron Bassbuds Vista in-Ear True Wireless Bluetooth 5.1 Headphones with Deep Bass, IPX4 Water/Sweat Resistant, Passive Noise Cancelation, Voice Assistance & Earbuds with Built-in HD Mic (Blue)"
            price={679}
            image="https://images-eu.ssl-images-amazon.com/images/I/31Y6An81A9S._SX300_SY300_QL70_FMwebp_.jpg"
            rating={3}
          />
          <Product
            id="12321344"
            title="Apple iPhone 13 Pro Max 512GB - Gold - (Imported from Canada)"
            price={199900}
            image="https://m.media-amazon.com/images/I/619m8rLBQSL._SX679_.jpg"
            rating={5}
          />
          <Product
            id="12321345"
            title="Acco & Deco Engineered Wood Open Bookcase ,Wood Finish ,Set Of 4,Brown"
            price={1069}
            image="https://m.media-amazon.com/images/I/61aXrnmWw5L._SX679_.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="12321346"
            title="2021 Apple MacBook Pro (16-inch//41.05 cm, Apple M1 Max chip with 10‑core CPU and 32‑core GPU, 32GB RAM, 1TB SSD) - Space Grey"
            price={329999}
            image="https://m.media-amazon.com/images/I/61aUBxqc5PL._SX679_.jpg"
            rating={5}
          />
          
        </div>
      </div>
    </div>
  );
}

export default Home;
