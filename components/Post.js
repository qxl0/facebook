import React from "react";
import Image from "next/image";

const Post = ({ id, name, message, email, timestamp, image, postImage }) => {
  return (
    <div className="flex flex-col">
      <div className="mt-5 rounded-t-2xl bg-white p-5  shadow-sm">
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full"
            src={image}
            width={40}
            height={40}
            alt=""
          />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-gray-400">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>
      {postImage && (
        <div className="relative">
          <Image src={postImage} objectFit="cover" layout="fill" />
        </div>
      )}
    </div>
  );
};

export default Post;
