"use client";
import React, { useState } from "react";
import Image from "next/image";
import UserReplyInput from "./UserReplyInput";
import { useDispatch } from "react-redux";
import { upVoteReply, downVoteReply } from "@redux/userSlice";

const Replies = ({
  reply,
  replyingTo,
  username,
  commentId,
  score,
  time,
  imgsrc,
  id,
  setReplyId,
}) => {
  const dispatch = useDispatch();
  const [hoverActive, setHoverActive] = useState(false);
  const [showReplyBox, setShowReplyBox] = useState(false);


  return (
    <div className=" h-fit">
      <section className="h-auto rounded-md lg:w-[500px] p-4  relative  mr-[50px] ml-[30px] pl-[20px] mb-[10px] bg-white">
        <div className="flex items-center gap-2 lg:ml-4">
          <Image src={imgsrc} alt={username} width={30} height={30} />
          <p className="text-[13px] font-[700]">{username}</p>
          <span className="text-gray-500 text-[13px]">{time}</span>
        </div>
        <div
          onClick={() => {
            setShowReplyBox(true);
            setReplyId(id);
          }}
          onMouseOver={() => setHoverActive(true)}
          onMouseLeave={() => setHoverActive(false)}
          className="absolute   flex items-center justify-center gap-2 cursor-pointer  bottom-2 lg:bottom-[73%] right-[55px]"
        >
          <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
              fill="hsl(238, 40%, 52%)"
              className={`${
                hoverActive && "fill-lightGrayishBlue"
              } duration-300 delay-100  transtion-all`}
            />
          </svg>
          <span
            className={`${
              hoverActive ? "text-lightGrayishBlue" : "text-moderateBlue"
            } transition-all font-[500] duration-300 delay-100  text-[14px]`}
          >
            Reply
          </span>
        </div>

        <div className="text-[18px]  rounded-[3px] text-moderateBlue absolute lg:left-0 lg:top-5 bottom-2  lg:ml-2  bg-lightGray lg:w-[20px] w-[55px] flex lg:flex-col justify-center items-center gap-2 lg:h-[60px] h-6">
          <svg
            width="11"
            height="11"
            xmlns="http://www.w3.org/2000/svg"
         
            onClick={() => dispatch(upVoteReply(id))}
          >
            <path
              className="transition-all  cursor-pointer duration-300 delay-100 hover:fill-moderateBlue"
              d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
              fill="#C5C6EF"
            />
          </svg>
          <span className="text-[12px] font-[700] self-center">{score}</span>

          <svg
          
            width="11"
            height="3"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => dispatch(downVoteReply(id))}
          >
            <path
              className="transition-all  cursor-pointer duration-300 delay-100 hover:fill-moderateBlue"
              d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
              fill="#C5C6EF"
            />
          </svg>
        </div>
        <div className=" text-[12px] lg:ml-5 mt-1 mb-12">
          <span className="text-moderateBlue">@{replyingTo}</span>, {reply}
        </div>
      </section>
      {showReplyBox && (
        <UserReplyInput
          id={commentId}
          setShowReplyBox={setShowReplyBox}
          reply
          replyId={id}
        />
      )}

    </div>
  );
};

export default Replies;
