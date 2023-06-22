"use client";

import { deleteComment } from "@/data/slices/comment";
import { Input } from "./Input";
import { ReplyCard } from "./ReplyCard";
import { Dispatch, SetStateAction } from "react";
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

export const CommentCard = ({
  comment,
  replyOpen,
  setReplyOpen,
  editOpen,
  setEditOpen,
}: {
  comment: Comment;
  replyOpen: string;
  editOpen: string;
  setEditOpen: Dispatch<SetStateAction<string>>;
  setReplyOpen: Dispatch<SetStateAction<string>>;
}) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center justify-end w-full space-y-5">
      <div className="bg-slate-200 p-7 rounded-lg w-full">
        <h1>Comment : {comment.comment}</h1>
        <h1 className=" capitalize">By: {comment.user}</h1>
        <h1>{comment.likes} likes</h1>
        <div className=" flex space-x-4 mt-6 self-end justify-end">
          <p onClick={() => setEditOpen(comment.id)} className="cursor-pointer">
            edit
          </p>
          <p
            onClick={() => dispatch(deleteComment(comment.id))}
            className=" cursor-pointer"
          >
            delete
          </p>
          <p
            onClick={() => setReplyOpen(comment.id)}
            className=" cursor-pointer"
          >
            reply
          </p>
        </div>
      </div>
      {replyOpen === comment.id && (
        <Input setReplyOpen={setReplyOpen} id={comment.id} />
      )}
      {editOpen === comment.id && (
        <Input setEditOpen={setEditOpen} id={comment.id} edit />
      )}

      <div className="w-full flex flex-col justify-end items-end">
        {comment.replies.length > 0 &&
          comment.replies.map((reply) => (
            <ReplyCard
              editOpen={editOpen}
              setEditOpen={setEditOpen}
              commentId={comment.id}
              reply={reply}
              key={reply.id}
            />
          ))}
      </div>
    </div>
  );
};
