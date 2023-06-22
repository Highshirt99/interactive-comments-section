import React, { useState } from "react";
import Image from "next/image";
import { addReply } from "@redux/userSlice";
import { useDispatch } from "react-redux";

const UserReplyInput = ({ commentId, setShowReplyBox, replyId, reply}) => {
  const dispatch = useDispatch();
  const date = new Date();
  const hours = date.getHours();
  const mins = date.getMinutes();
  const minutes = mins < 10 ? "0" + mins : mins;

  // const data = useSelector((state) => state.data.userData);

  const [userInput, setUserInput] = useState("");
  const sendReply = (commentId, replyId) => {
    // data.comments.replies.push(userReply)
    if (reply) {
      dispatch(
        addReply({
          content: userInput,
          createdAt: `${hours}:${minutes}`,
          replyId
        })
      );
      // console.log(replyId)
    } else {
      dispatch(
        addReply({
          commentId,
          content: userInput,
          createdAt: `${hours}:${minutes}`,
        })
      );
    }

    setShowReplyBox(null);
    
  };

  return (
    <div className="relative p-4 h-auto min-h-[120px] lg:min-h-[100px] bg-white lg:w-[500px] rounded-md ml-[30px] pl-[20px] mr-[50px] my-[10px]">
      <div className="flex flex-col gap-2 lg:justify-between lg:flex-row">
        <div className="flex gap-2">
          <Image
            src="/images/avatars/image-juliusomo.png"
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
          onClick={() => sendReply(commentId, replyId) }
          className="self-center p-1 w-[80px] lg:static absolute right-4 bottom-2 text-white rounded-md cursor-pointer bg-moderateBlue hover:bg-lightGrayishBlue"
        >
          Reply
        </button>
      </div>
    </div>
  );
};

export default UserReplyInput;
