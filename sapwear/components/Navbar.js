import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex md:flex-row md:justify-start flex-col justify-center items-center py-2 shadow-md z-40 sticky bg-white top-0">
      <div className="logo mx-5">
        <Link href={"/"}>
          <a>
            <Image src="/logo.png" alt="" width={200} height={40} />
          </a>
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-6 font-bold md:text-md">
          <Link href={"/tshirts"}>
            <a>
              <li>Tshirts</li>
            </a>
          </Link>
          <Link href={"/hoodies"}>
            <a>
              <li>Hoodies</li>
            </a>
          </Link>
          <Link href={"/stickers"}>
            <a>
              <li>Stickers</li>
            </a>
          </Link>
          <Link href={"/mugs"}>
            <a>
              <li>Mugs</li>
            </a>
          </Link>
        </ul>
      </div>
      <div className="cart absolute right-0 top-4 mx-5">
        <AiOutlineShoppingCart className="text-xl md:text-2xl" />
      </div>

      {/* Sidebar */}
      <div className="sidebar absolute top-0 right-0 bg-blue-100">
        This is my shopping cart
        <ol>
          <li>
            <span>Tshirt - Wear the sapmerch</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Navbar;
