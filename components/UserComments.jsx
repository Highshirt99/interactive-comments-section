import React, { useEffect, useState } from "react";
import data from "../data.json";
import Image from "next/image";
import DeleteBox from "./DeleteBox";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCommment,
  downVoteComment,
  upVoteComment,
} from "../redux/userSlice";
import { editComment } from "@redux/userSlice";

const UserComments = ({ comment, index }) => {
  const [deleteHoverActive, setDeleteHoverActive] = useState(false);
  const [editHoverActive, setEditHoverActive] = useState(false);
  const [deleteConfirmed, setDeleteConfirmed] = useState(false);
  const [showEdit, setShowEdit] = useState(null);
  const [showDeleteBox, setShowDeleteBox] = useState(false);
  const [id, setId] = useState(null)
 
  const [edited, setEdited] = useState(comment.content);

  const dispatch = useDispatch();

  const date = new Date();
  const hours = date.getHours();
  let mins = date.getMinutes();
  const minutes = mins < 10 ? "0" + mins : mins;

  const handleDelete = (item) => {
    dispatch(deleteCommment(item));
    setShowDeleteBox(false);
  };
  const handleCancel = () => {
    setDeleteConfirmed(false);
    setShowDeleteBox(false);
  };

  const handleEdit = (commentId) => {
    setShowEdit(commentId);
  };

  const updateComment = (commentId, commentContent) => {
    setShowEdit(null);

    dispatch(
      editComment({
        commentId,
        commentContent,
      })
    );
    // setEdited(null);
    // dispatch(setEditedComment(edited));
  };

  return (
    <div>
      <div
        key={index}
        className="
           relative h-auto bg-white rounded-md w-full lg:w-[600px] p-4 mb-5"
      >
        <div>
          <div className="text-[18px]  rounded-[3px] text-moderateBlue absolute lg:left-2 lg:top-5 bottom-2  lg:ml-0  bg-lightGray lg:w-[20px] w-[55px] flex lg:flex-col justify-center items-centers gap-2 lg:h-[60px] h-6">
            <svg
              width="11"
              height="11"
              xmlns="http://www.w3.org/2000/svg"
              className="self-center cursor-pointer "
              onClick={() => {
                dispatch(upVoteComment(comment.id));
              }}
            >
              <path
                className="transition-all duration-300 delay-100 hover:fill-moderateBlue"
                d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
                fill="#C5C6EF"
              />
            </svg>
            <span className="text-[10px] font-[700] self-center">
              {comment.score}
            </span>

            <svg
              className="self-center cursor-pointer "
              width="11"
              height="3"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                dispatch(downVoteComment(comment.id));
              }}
            >
              <path
                className="transition-all duration-300 delay-100 hover:fill-moderateBlue"
                d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
                fill="#C5C6EF"
              />
            </svg>
          </div>
          <div className="flex text-[13px] items-center gap-3 mb-1 lg:ml-5">
            <Image
              src={data.currentUser.image.png}
              width={30}
              height={30}
              alt="You"
            />
            <p className="font-[700]">{data.currentUser.username}</p>
            <p className="p-1 text-white bg-moderateBlue w-[40px] text-center rounded-sm text-[10px]">
              You
            </p>
            <span className="text-gray-500">
              {hours}:{minutes}
            </span>
            <div className="absolute flex items-center gap-3 ml-20 lg:static bottom-3 right-2 ">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setShowDeleteBox(true) & setId(comment.id)}
                onMouseOver={() => setDeleteHoverActive(true)}
                onMouseLeave={() => setDeleteHoverActive(false)}
              >
                <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"
                    fill="hsl(358, 79%, 66%)"
                    className={` ${
                      deleteHoverActive && "fill-paleRed"
                    } transition-all duration-300 delay-100`}
                  />
                </svg>
                <span
                  className={`${
                    deleteHoverActive ? "text-paleRed" : "text-softRed"
                  }  font-[500]  transition-all duration-300 delay-100`}
                >
                  Delete
                </span>
              </div>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => handleEdit(comment.id)}
                onMouseOver={() => setEditHoverActive(true)}
                onMouseLeave={() => setEditHoverActive(false)}
              >
                <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"
                    fill="hsl(238, 40%, 52%)"
                    className={` ${
                      editHoverActive && "fill-lightGrayishBlue"
                    } transition-all duration-300 delay-100`}
                  />
                </svg>
                <span
                  className={`${
                    editHoverActive ? "text-lightGrayishBlue" : "text-moderateBlue"
                  }  font-[500]  transition-all duration-300 delay-100`}
                >
                  Edit
                </span>
              </div>
            </div>
          </div>
          <div className="mb-12 lg:ml-5 text-[13px]">
            <div>
              <p className={`${showEdit ? "hidden" : "block"} `}>
                {comment.content}
              </p>
            </div>
          </div>
        </div>
        {showEdit === comment.id && (
          <div className="mt-10 mb-20">
            <textarea
              id="comment"
              name="reply"
              value={edited}
              onChange={(e) => setEdited(e.target.value)}
              className=" min-h-[50px]  lg:w-[400px] w-full mb-2 p-1 outline-none lg:min-h-[100px]  bg-none border border-moderateBlue  text-darkBlue rounded-md "
            />

            <br />
            <button
              onClick={() => updateComment(comment.id, edited)}
              className="p-1 w-[80px] absolute lg:right-[61px] right-4 mb-6 text-white rounded-md cursor-pointer bg-moderateBlue hover:bg-lightGrayishBlue"
            >
              Update
            </button>
          </div>
        )}
      </div>

      {showDeleteBox && (
        <DeleteBox
          handleDelete={() => handleDelete(id)}
          handleCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default UserComments;
