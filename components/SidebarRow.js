import React from "react";
import Image from "next/image";

const SidebarRow = ({ src, Icon, title }) => {
  return (
    <div className="flex items-center space-x-2 p-4">
      {src && (
        <Image
          className="rounded-full"
          src={src}
          width={40}
          height={40}
          layout="fixed"
        />
      )}
      {Icon && <Icon className=" h-8 w-8 text-blue-500 " />}
      <p className="hidden font-medium sm:inline-flex">{title}</p>
    </div>
  );
};

export default SidebarRow;
