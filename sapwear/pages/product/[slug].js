/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [pin, setPin] = useState();
  const [service, setService] = useState();

  const checkServiceability = async () => {
    let pins = await fetch("http://localhost:3000/api/pincode");
    let pinJson = await pins.json();
    if (pinJson.includes(parseInt(pin))) {
      setService(true);
    } else {
      setService(false);
    }
  };

  const onChangePin = (e) => {
    setPin(e.target.value);
  };

  return (
    <>
      <Head>
        <title>{slug}</title>
      </Head>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-16 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto px-24 object-cover object-top rounded"
              src="https://m.media-amazon.com/images/I/71fNC29PcqL._UX569_.jpg"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                SAPWEAR
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                Wear the Sapmerch (M/L/XL/BLACK)
              </h1>
              <p className="leading-relaxed">
                100% rich cotton sweatshirt, pre shrunk sweatshirts for men to
                give great comfort and stylish look.
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ₹499
                </span>
                <button className="flex text-sm ml-8 text-white bg-blue-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-blue-600 rounded">
                  Buy Now
                </button>
                <button className="flex text-sm ml-4 text-white bg-blue-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-blue-600 rounded">
                  Add to Cart
                </button>
              </div>
              <div className="pin mt-6 flex space-x-2 text-sm">
                <input
                  onChange={onChangePin}
                  placeholder="Enter your Pincode"
                  className="px-2 border-2 border-gray-400 rounded-md"
                  type="text"
                />
                <button
                  onClick={checkServiceability}
                  className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded"
                >
                  Check
                </button>
              </div>
              {!service && service != null && (
                <div className="text-red-700 text-sm mt-3">
                  Sorry! We do not deliver to this pincode yet.
                </div>
              )}
              {service && service != null && (
                <div className="text-green-700 text-sm mt-3">
                  Yay! This pincode is serviceable.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slug;
