'use client';
import React, { useState } from 'react';
import { Comment, CommentCard} from '@/components/CommentCard';
import { useSelector } from 'react-redux';
import { Input } from '../../components/Input';


export default function Commentpage() {
	// @ts-ignore
	const {comment: comments} = useSelector((state: any) => state);
	const [replyOpen, setReplyOpen] = useState<string>('');
	const [editOpen, setEditOpen] = useState<string>('');
	return (
		<div className=' w-[80%] flex flex-col items-center'>
			<h1>comments:</h1>
			<div className='flex flex-col w-full space-y-6'>
				{comments?.comments.map((comment : Comment) => (
					<CommentCard
						comment={comment}
						key={comment.id}
						replyOpen={replyOpen}
						setReplyOpen={setReplyOpen}
						editOpen={editOpen}
						setEditOpen={setEditOpen}
					/>
				))}
			</div>
			{/* <hr /> */}
			<Input />
		</div>
	);
}
