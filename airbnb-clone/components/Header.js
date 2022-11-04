/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 shadow-md md:px-10">
      <div className="relative my-auto flex h-10 cursor-pointer items-center">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      <div className="flex items-center rounded-full py-2 md:border-2 md:shadow-sm">
        <input
          className="flex-grow bg-transparent pl-5 text-sm text-gray-600 placeholder-gray-400 focus:outline-none"
          type="text"
          placeholder="Start your search"
        />
        <MagnifyingGlassIcon className="hidden h-8 cursor-pointer rounded-full bg-red-400 p-2 text-white md:mx-2 md:inline-flex" />
      </div>

      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden cursor-pointer md:inline">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 rounded-full border-2 p-2">
          <Bars3Icon className="h-6 cursor-pointer" />
          {!session ? (
            <UserCircleIcon
              className="h-6 cursor-pointer"
              onClick={() => signIn()}
            />
          ) : (
            <img
              src={session?.user?.image}
              className="h-6 cursor-pointer rounded-full"
              onClick={() => signOut()}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
