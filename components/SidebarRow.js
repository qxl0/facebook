import React from "react";

const SidebarRow = ({ src, Icon, title }) => {
  return (
    <div>
      {src && (
        <Image
          className="rounded-full"
          src={src}
          width={40}
          height={40}
          layout="fixed"
        />
      )}
      {Icon && (
        <Icon className="hidden font-medium sm:inline-flex">{title}</Icon>
      )}
    </div>
  );
};

export default SidebarRow;
