'use client';

import {
	addComment,
	deleteComment,
	deleteReply,
	editComment,
	editReply,
	reply,
} from '@/data/slices/comment';
import { Dispatch, SetStateAction, useState } from 'react';
import { useDispatch } from 'react-redux';

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


export const ReplyCard = ({
	reply,
	commentId,
	editOpen,
	setEditOpen,
}: {
	reply: Reply;
	commentId: string;
	editOpen: string;
	setEditOpen: Dispatch<SetStateAction<string>>;
}) => {
	const dispatch = useDispatch();
	const [comment, setComment] = useState('');
	return (
		<div className='bg-slate-200 p-7 rounded-lg w-[80%] self-end my-3'>
			<h1>Comment : {reply.comment}</h1>
			<h1 className=' capitalize'>By: {reply.user}</h1>
			<h1>{reply.likes} likes</h1>
			{editOpen !== reply.id && (
				<div className=' flex space-x-4 mt-6 self-end justify-end'>
					<p
						onClick={() => setEditOpen(reply.id)}
						className='cursor-pointer'
					>
						edit
					</p>
					<p
						onClick={() => dispatch(deleteReply({ commentId, replyId: reply.id }))}
						className=' cursor-pointer'
					>
						delete
					</p>
				</div>
			)}
			{editOpen === reply.id && (
				<div className=' w-full max-w-full my-4 flex gap-2'>
					<input
						value={comment}
						onChange={(e) => setComment(e.target.value)}
						className='w-full p-4 rounded-md'
						type='text'
					/>
					<span
						onClick={() => {
							dispatch(editReply({ commentId, replyId: reply.id, comment }));
							setComment('');
							setEditOpen('');
						}}
						className='flex items-center justify-center align-middle cursor-pointer'
					>
						edit
					</span>
				</div>
			)}
		</div>
	);
};