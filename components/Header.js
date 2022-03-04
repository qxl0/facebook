import React from "react";
import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";

import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <div className="flex">
      <h1 className="text-5xl text-green-500">Header</h1>
      <Image
        src="https://links.papareact.com/5me"
        width={40}
        height={40}
        layout="fixed"
      />
      <div className="flex ml-2 items-center rounded-full">
        <SearchIcon className="h-5 w-5 text-blue-500" />
        <input type="text" placeholder="Search faceboo" />
      </div>
    </div>
  );
};

export default Header;
