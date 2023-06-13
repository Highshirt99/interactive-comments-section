import React, { useState } from "react";
import Image from "next/image";
import { addComment } from "@redux/userSlice ";
import { useDispatch, useSelector } from "react-redux";

const UserReplyInput = () => {
  const dispatch = useDispatch()

  const [userInput, setUserInput] = useState("");
  const sendReply = () => {
    // data.comments.replies.push(userReply)
    // dispatch(userInput)
  };
  return (
    <div className="relative p-4 h-auto min-h-[120px] lg:min-h-[100px] bg-white lg:w-[500px] rounded-md ml-[30px] pl-[20px] mr-[50px] my-[10px]">
      <div className="flex flex-col gap-2 lg:justify-between lg:flex-row">
        <div className="flex gap-2">
          <Image
            src="/images/avatars/image-ramsesmiron.png "
            width={30}
            height={30}
            alt="You"
            className="absolute self-center bottom-2 lg:static"
          />
          <textarea
            onChange={(e) => setUserInput(e.target.value)}
            className=" min-h-[50px] h-auto lg:w-[350px] w-full mb-2 p-1 outline-none lg:min-h-[100px]  bg-none border border-moderateBlue  text-darkBlue rounded-md "
          />
        </div>
        <button
          onClick={sendReply}
          className="self-center p-1 w-[80px] lg:static absolute right-4 bottom-2 text-white rounded-md cursor-pointer bg-moderateBlue hover:bg-lightGrayishBlue"
        >
          Reply
        </button>
      </div>
    </div>
  );
};

export default UserReplyInput;
