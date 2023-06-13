"use client";

import React, { useEffect, useState } from "react";
import { addComment } from "@redux/userSlice ";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

const UserCommentInput = () => {
  const [userInput, setUserInput] = useState("");
  const dispatch = useDispatch();

  const sendComment = (e) => {
    e.preventDefault();
    // data.comments.replies.push(userReply)
    if (userInput !== "") {
      dispatch(addComment({ content: userInput, score: 0, id: Math.random() }));
    }

    const userComment = document.getElementById("userComment");
    userComment.value = "";
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
            id="userComment"
            placeholder="Add a comment..."
            onChange={(e) => setUserInput(e.target.value)}
            className=" min-h-[50px] h-auto lg:w-[350px] w-full mb-2 p-2 outline-none lg:min-h-[100px] text-sm bg-none border border-moderateBlue  text-darkBlue rounded-md "
          />
        </div>
        <button
          onClick={sendComment}
          className="self-center p-1 w-[80px] lg:static absolute right-4 bottom-2 text-white rounded-md cursor-pointer bg-moderateBlue hover:bg-lightGrayishBlue"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default UserCommentInput;
