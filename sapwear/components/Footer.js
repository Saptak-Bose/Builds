import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link href={"/"}>
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <Image src="/logo.png" alt="" width={200} height={40} />
              </a>
            </Link>
            <p className="mt-2 text-sm text-gray-500 px-4">
              {`Wear the <sapmerch /> 
              Sapwear.com is a ecommerce website developed by`}{" "}
              <a href="https://github.com/Saptak-Bose">@cleversap</a> for
              educational purposes. This content is transformative and is not
              being exactly copied from{" "}
              <a href="https://www.youtube.com/c/CodeWithHarry">
                @codewithharry
              </a>
              .
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                SHOP
              </h2>
              <nav className="list-none mb-10">
                <Link href={"/tshirts"}>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                      Tshirts
                    </a>
                  </li>
                </Link>
                <Link href={"/hoodies"}>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                      Hoodies
                    </a>
                  </li>
                </Link>
                <Link href={"/stickers"}>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                      Stickers
                    </a>
                  </li>
                </Link>
                <Link href={"/mugs"}>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                      Mugs
                    </a>
                  </li>
                </Link>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CUSTOMER SERVICE
              </h2>
              <nav className="list-none mb-10">
                <Link href={"/contact"}>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                      Contact Us
                    </a>
                  </li>
                </Link>
                <Link href={"/about"}>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                      About Us
                    </a>
                  </li>
                </Link>
                <Link href={"/returnpolicy"}>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                      Return Policy
                    </a>
                  </li>
                </Link>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                POLICY
              </h2>
              <nav className="list-none mb-10">
                <Link href={"/privacy"}>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                      Privacy Policy
                    </a>
                  </li>
                </Link>
                <Link href={"/terms"}>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                      Terms & Conditions
                    </a>
                  </li>
                </Link>
              </nav>
            </div>
            <div className="lg:w-1/4 flex items-center justify-center md:w-1/2 w-full px-4"><nav className="list-none mb-10 w-60"><img src="/pay.png" alt="" /></nav></div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2022 Sapwear.com — All Rights Reserved
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
