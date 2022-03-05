import { useSession } from "next-auth/react";
import React from "react";
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from "@heroicons/react/solid";

const Sidebar = () => {
  const { data: session } = useSession();
  return (
    <div className="mt-5 max-w-[600px] p-2 xl:min-w-[300px]">
      <SidebarRow Icon={UsersIcon} title="Friends" />
    </div>
  );
};

export default Sidebar;
