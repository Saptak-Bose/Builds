import Image from "next/image";
import React from "react";
import {
  BellIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  GlobeAsiaAustraliaIcon,
  PlusIcon,
  SparklesIcon,
  MegaphoneIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
} from "@heroicons/react/20/solid";

const Header = () => {
  return (
    <div className="flex bg-white px-4 py-2 shadow-sm sticky top-0 z-50">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image
          objectFit="contain"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Reddit_logo_new.svg/731px-Reddit_logo_new.svg.png?20220313085316"
          layout="fill"
        />
      </div>

      <div className="flex items-center mx-7 xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="flex-1 ml-2 hidden lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      <form className="flex flex-1 items-center space-x-2 border border-gray-200 rounded-sm bg-gray-100 px-3 py-1">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
        <input
          className="flex-1 bg-transparent focus:outline-none"
          type="text"
          placeholder="Search Reddit"
        />
        <button hidden type="submit" />
      </form>

      <div className="text-gray-500 space-x-2 items-center mx-5 hidden lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeAsiaAustraliaIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatBubbleOvalLeftEllipsisIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <MegaphoneIcon className="icon" />
      </div>
      <div className="ml-5 flex items-center lg:hidden">
        <Bars3Icon className="icon" />
      </div>

      <div className="hidden lg:flex items-center space-x-2 border border-gray-100 p-2 cursor-pointer">
        <div className="relative h-5 w-5 flex-shrink-0">
          <Image
            objectFit="contain"
            src="https://links.papareact.com/23l"
            layout="fill"
          />
        </div>
        <p className="text-gray-400">Sign In</p>
      </div>
    </div>
  );
};

export default Header;
