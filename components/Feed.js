import React from "react";
import InputBox from "./InputBox";
import Posts from "./Posts";
import Stories from "./Stories";

const Feed = ({ posts }) => {
  return (
    <div
      className="mr-4 h-screen flex-grow 
    overflow-y-auto
    pb-44 pt-6 scrollbar-hide xl:mr-40"
    >
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        {/* Stores */}
        <Stories />
        {/* Inputbox */}
        <InputBox />
        {/* Posts */}
        <Posts posts={posts} />
      </div>
    </div>
  );
};

export default Feed;
