import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import {
  VideoCameraIcon,
  CameraIcon,
  EmojiHappyIcon,
} from "@heroicons/react/solid";
import { useRef } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const InputBox = () => {
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [imageToPost, setImageToPost] = React.useState(null);
  const sendPost = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) {
      return;
    }

    addDoc(collection(db, "posts"), {
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: serverTimestamp(),
    })
      .then((docRef) => {
        console.log(docRef.id);
        inputRef.current.value = "";
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (e) => {
      console.log("image loaded");
      setImageToPost(e.target.result);
    };
  };
  const removeImage = () => {
    setImageToPost(null);
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
            ref={inputRef}
            className="h-12 flex-grow rounded-full bg-gray-100 px-5 focus:outline-none"
            type="text"
            placeholder={`What's on your mind, ${session.user.name}`}
          />
          <button hidden onClick={sendPost} type="submit">
            Submit
          </button>
        </form>
        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex cursor-pointer flex-col filter transition duration-150 hover:scale-105 hover:brightness-110"
          >
            <img className="object-containj h-10" src={imageToPost} alt="" />
            <p className="text-center text-xs text-red-500">Remove</p>
          </div>
        )}
      </div>
      <div className="flex justify-evenly">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>

        <div
          className="inputIcon"
          onClick={() => filePickerRef.current.click()}
        >
          <CameraIcon className="h-7 text-green-500" />
          <p className="text-xs sm:text-sm xl:text-base">Photo video</p>
          <input
            type="file"
            ref={filePickerRef}
            hidden
            onChange={addImageToPost}
          />
        </div>

        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-500" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
