import React from "react";

const HeaderIcon = ({ Icon }) => {
  return (
    <div
      className="flex cursor-pointer items-center rounded-xl active:border-b-2
     active:border-blue-500 sm:h-14 md:px-10 md:hover:bg-gray-100"
    >
      <Icon className="h-5 " />
    </div>
  );
};

export default HeaderIcon;
