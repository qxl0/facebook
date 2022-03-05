import React from "react";
import Stories from "./Stories";

const Feed = () => {
  return (
    <div className="mr-4 h-screen flex-grow overflow-y-auto pb-44 pt-6 xl:mr-40">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        {/* Stores */}
        <Stories />
        {/* Inputbox */}
        {/* Posts */}
      </div>
    </div>
  );
};

export default Feed;
