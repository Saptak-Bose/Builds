import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 gap-y-10 bg-gray-100 px-32 py-14 text-gray-600 md:grid-cols-4">
      <div className="space-y-4 text-xs text-gray-800 md:ml-36">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800 md:ml-36">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessiblity</p>
        <p>This is not a real site</p>
        <p>{`It's a pretty awesome clone`}</p>
        <p>Referrals accepted</p>
        <p>Saparmy</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800 md:ml-36">
        <h5 className="font-bold">HOST</h5>
        <p>Clever Sap</p>
        <p>Presents</p>
        <p>Airbnb clone</p>
        <p>
          <a href="https://github.com/Saptak-Bose">Github</a>
        </p>
        <p>Check it Out</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800 md:ml-36">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Centre</p>
        <p>Chat with Us</p>
        <p>Trust & Safety</p>
        <p>Easter Eggs</p>
        <p>For the win</p>
      </div>
    </div>
  );
};

export default Footer;
