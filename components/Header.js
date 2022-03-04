import React from "react";
import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";

import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

const Header = () => {
  return (
    <div className="flex items-center">
      <Image
        src="https://links.papareact.com/5me"
        width={40}
        height={40}
        layout="fixed"
      />
      <div className="ml-2 flex items-center rounded-full bg-gray-100 p-2">
        <SearchIcon className="h-6  text-gray-600" />
        <input
          className="ml-2 flex items-center bg-transparent placeholder-gray-500 outline-none"
          type="text"
          placeholder="Search faceboo"
        />
      </div>
      <div className="flex flex-grow justify-center">
        <div>
          <HeaderIcon Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
    </div>
  );
};

export default Header;
