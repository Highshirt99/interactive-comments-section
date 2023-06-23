

import { createSlice } from '@reduxjs/toolkit';

const commentSlice = createSlice({
	name: 'comment',
	initialState: {
		comments: [
			{
				id: '1',
				user: 'dammy',
				likes: 8,
				comment: 'Heyyo what up',
				replies: [{ id: '11', user: 'basit', likes: 1, comment: 'Heyy up' }],
			},
			{
				id: '2',
				user: 'basit',
				likes: 8,
				comment: 'kilo bup',
				replies: [{ id: '11', user: 'basit', likes: 1, comment: 'Heyy up' }],
			}, 
		],
	},
	reducers: {
		addComment(state, action) {
			const likes = Math.round(Math.random() * 100);
			const id = (Math.random() * 1000000000).toString();
			const user = ['Basit', 'Rasheed', 'Sheriff', 'Ridwan', 'Habeeb', 'Dammy'][
				Math.floor(Math.random() * 6)
			];
			state.comments.push({ comment: action.payload, id, likes, replies: [], user });
		},
		deleteComment(state, action) {
			const newArr = state.comments.filter((comment) => comment.id !== action.payload);
			state.comments = newArr;
		},

		reply(state, action) {
			const likes = Math.round(Math.random() * 100);
			const id = (Math.random() * 1000000000).toString();
			const user = ['Basit', 'Rasheed', 'Sheriff', 'Ridwan', 'Habeeb', 'Dammy'][
				Math.floor(Math.random() * 6)
			];

			state.comments.forEach((comment) => {
				if (comment.id === action.payload.id) {
					comment.replies.push({ likes, id, comment: action.payload.reply, user });
				}
			});
		},

		deleteReply(state, action) {
			state.comments.forEach((comment) => {
				if (comment.id === action.payload.commentId) {
					comment.replies = comment.replies.filter(
						(reply) => reply.id !== action.payload.replyId
					);
				}
			});
		},

		editReply(state, action) {
			state.comments.forEach((comment) => {
				if (comment.id === action.payload.commentId) {
					comment.replies.forEach((reply) => {
						if (reply.id === action.payload.replyId) {
							reply.comment = action.payload.comment;
						}
					});
				}
			});
		},

		editComment(state, action) {
			state.comments.forEach((comment) => {
				if (comment.id === action.payload.id) {
					comment.comment = action.payload.comment;
				}
			});
		},
	},
});

export default commentSlice.reducer;

export const { addComment, deleteComment, deleteReply, reply, editComment, editReply } =
	commentSlice.actions;
