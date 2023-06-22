"use client";

import {
  addComment,
  editComment,
  reply,
} from "@/data/slices/comment";
import { Dispatch, SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";

export interface Comment {
  id: string;
  user: string;
  likes: number;
  comment: string;
  replies: Reply[];
}

interface Reply {
  id: string;
  user: string;
  likes: number;
  comment: string;
}
export const Input = ({
  edit,
  id,
  setReplyOpen,
  setEditOpen,
}: {
  edit?: boolean;
  id?: string;
  setReplyOpen?: Dispatch<SetStateAction<string>>;
  setEditOpen?: Dispatch<SetStateAction<string>>;
}) => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col w-full p-4 rounded-md my-8 bg-slate-300">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className=" rounded-md w-full h-[100px]"
      ></textarea>
      <div className=" flex w-full items-end justify-end space-x-3">
        {id && (
          <button
            onClick={() => {
              setEditOpen?.("");
              setReplyOpen?.("");
            }}
            className=" self-end px-4 py-2 bg-light-purple text-white m-2 rounded-md"
          >
            close
          </button>
        )}
        <button
          onClick={() => {
            if (id && edit) {
              dispatch(editComment({ id, comment }));
              setEditOpen?.("");
              setComment("");
            } else if (id) {
              dispatch(reply({ id, reply: comment }));
              setReplyOpen?.("");
              setComment("");
            } else {
              dispatch(addComment(comment));
              setComment("");
            }
          }}
          className=" self-end px-4 py-2 bg-light-purple text-white m-2 rounded-md"
        >
          {edit ? "Edit" : "Add"}
        </button>
      </div>
    </div>
  );
};
