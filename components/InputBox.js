import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const InputBox = () => {
  const { data: session } = useSession();
  const sendPost = (e) => {
    e.peventDefault();
  };
  return (
    <div className="mt-6 rounded-2xl bg-white p-2 font-medium text-gray-500 shadow-md focus:outline-none">
      <div className="flex items-center space-x-4 p-4">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            className="h-12 flex-grow rounded-full bg-gray-100 px-5 focus:outline-none"
            type="text"
            placeholder={`What's on your mind, ${session.user.name}`}
          />
          <button hidden onClick={sendPost} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputBox;
